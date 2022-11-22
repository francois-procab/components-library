const { src, dest, watch, series, parallel } = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fiber = require("fibers");

// Styles compilation, autoprefixer and minification
const styles = (done) => {
	return src("./global.scss")
		.pipe(plumber())
		.pipe(
			sass({
				includePaths: ["./node_modules"],
				fiber: fiber,
			})
		)
		.on("error", sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest("./"));
	done();
};

// Watch Files
const watchFiles = (done) => {
	watch("./**/*.scss", styles);
	done();
};

exports.styles = styles;
exports.default = series(parallel(styles), parallel(watchFiles));
