const path = require("path");
const src = path.resolve(__dirname, "src");

module.exports = {
	entry: {
		app: src + "/js/app.js",
	},
	output: {
		filename: "[name].js",
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
			},
		],
	},
	mode: "development",
};
