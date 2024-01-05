// Gulp
const { src, dest, watch, series, parallel } = require("gulp");
// Plugins
const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const cssnano = require("cssnano");
const del = require("del");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const sass = require("gulp-dart-sass");
const purgecss = require("gulp-purgecss");

const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

const argv = require("yargs").argv;
const gulpIf = require("gulp-if");

const production = argv.prod ? true : false;

// Paths
const paths = {
	// IN
	fonts: "./src/fonts/**/*",
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

const purgeCSS = (done) => {
	return src(paths.dest + "*.css")
		.pipe(
			purgecss({
				content: ["**/*.html"],
				fontFace: true,
				variables: true,
				safelist: [/^js-/, /^is-/, /^has-/],
			})
		)
		.pipe(dest(paths.dest));
	done();
};

// Script minification
const scripts = (done) => {
	return src(paths.entryJs, { allowEmpty: true }).pipe(plumber()).pipe(babel()).pipe(webpack(webpackConfig)).pipe(uglify()).pipe(dest(paths.dest));
	done();
};

// Move fonts folder to dist
const fonts = (done) => {
	return src(paths.fonts).pipe(dest(paths.fontsDest));
	done();
};

// Watch Files
const watchFiles = (done) => {
	watch(paths.styles, styles);
	watch(paths.scripts, scripts);
	done();
};

// Includes HTMLS Partials
const htmlIncludes = (done) => {
	return src(["./index.html", "./components/*.html"]).pipe(plumber()).pipe(htmlImport("./partials/")).pipe(dest("./dist/"));
	done();
};

exports.styles = styles;
exports.scripts = scripts;
exports.purgeCSS = purgeCSS;
exports.fonts = fonts;
exports.default = series(clean, parallel(fonts, styles, scripts), parallel(watchFiles));
exports.build = series(clean, parallel(fonts, styles, scripts), parallel(purgeCSS));
