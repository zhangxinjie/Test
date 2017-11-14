var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BabiliPlugin = require("babili-webpack-plugin");
var HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	entry : {
		content : "./src/js/content/index.js"
	},
	output : {
		path: path.resolve(__dirname,"../dist"),
		publicPath: "/",
		filename: "js/[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude: /node_modules/,
				query: {
					presets:[
						["es2015"]
					]
				}
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					use:["css-loader",'sass-loader'],
					fallback:"style-loader"
				})
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					use:"css-loader",
					fallback:"style-loader"
				})
			},
			{
				test:/\.(png|svg|jpg|jpeg|gif)$/,
				loader:"file-loader?name=images/[name].[ext]"
			},
			{
				test:/\.(eot|woff|woff2|ttf)(\?\S*)?$/,
				loader:"file-loader"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new BabiliPlugin({}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			filename:'js/bundle.vendor.js'
		}),
		new ExtractTextPlugin({
			filename:'css/[name].css?[hash]',
			allChunks: true
		})
	]
}
