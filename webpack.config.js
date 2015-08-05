var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: 		{
		app: 	"./src/app/bootstrap.js",
		test: 	"./src/research/bootstrap.coffee"
	},
	output: 	{
		path: 			path.join(__dirname, "public/lib/js/"),
		publicPath: 	"public/",
		filename: 		"[name].js",
		chunkFilename: 	"[chunkhash].js"
	},
	module: 	{
		loaders: [
			{ test: /\.json$/,  	loader: "json-loader"},
			{ test: /\.coffee$/,	loader: "coffee-loader" },

			// required to write "require('./style.css')"
			{ test: /\.css$/,    	loader: "style-loader!css-loader" },

			// required for bootstrap icons
			{ test: /\.woff$/,   	loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    	loader: "file-loader?prefix=font/" },
			{ test: /\.eot$/,    	loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    	loader: "file-loader?prefix=font/" },
		],
	},
	dev: 		{
		server: {
			domain:	"localhost",
			port: 	3000
		}
	},
	resolve: 	{ extensions: ['', '.js', '.json', '.coffee'] },
	node: 		{fs: "empty"},
	cache: 		true,
	plugins:	[]
};
