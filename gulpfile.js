// Gulp
const { src, dest, watch, series, parallel } = require("gulp");
// Plugins
const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const cssnano = require("cssnano");
const del = require("del");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-dart-sass");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

// Paths
const paths = {
	// IN
	styles: "./src/scss/**/*.scss",
	scripts: "./src/js/**/*.js",
	entryJs: "./src/js/app.js",
	// OUT
	fontsDest: "./dist/fonts/",
	dest: "./dist/",
};

const clean = (done) => {
	return del(`./${paths.dest}/`);
	done();
};

// Styles compilation, autoprefixer and minification
const styles = (done) => {
	return src(paths.styles)
		.pipe(plumber())
		.pipe(
			sass({
				includePaths: ["./node_modules"],
			})
		)
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest(paths.dest));
	done();
};

// Script minification
const scripts = (done) => {
	return src(paths.entryJs, { allowEmpty: true }).pipe(babel()).pipe(webpack(webpackConfig)).pipe(uglify()).pipe(dest(paths.dest));
	done();
};

// Watch Files
const watchFiles = (done) => {
	watch("./**/*.scss", styles);
	watch(paths.scripts, scripts);
	done();
};

exports.styles = styles;
exports.scripts = scripts;
exports.default = series(clean, parallel(styles, scripts), parallel(watchFiles));
