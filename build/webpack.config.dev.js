var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		content:"./src/js/content/index.js"
	},
	output: {
		path: path.resolve(__dirname,'/dist'),
		publicPath: '/dist/',
		filename: 'js/[name].js'
	},
	devtool: "source-map",
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader",
				exclude: /node_modules/,
				query: {
					presets:["es2015"]
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader',options:{sourceMap: true}},
					{loader:'sass-loader',options:{sourceMap: true}}
				]
			},
			{
				test:/\.vue$/,
				loader:"vue-loader",
				exclude:/node_modules/
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
	devServer: {
		contentBase:path.resolve(__dirname,"../"),
		port:8020,
		inline: true,
		compress:true,
		proxy:{
			'/opera-news-deeplink-cms':{
				target: "http://localhost:8080",
				pathRewrite:{"^/opera-news-deeplink-cms":""},
				secure: false,
				changeOrigin:true
			}
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV: JSON.stringify("development")
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

//host/book/id
//proxy/book/id
