const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/app.jsx',
	output:{
		path: path.resolev(__dirname,'dist'),
		filename: 'app.js'
	},
	module:{
		rules:[
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use:{
					loader: 'babel-loader',
					options: {
						presets:['@babel/preset-env','@babel/preset-react']
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif|bmp)$/i
				use:{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'LilyLaw的个人空间',
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon.ico'
		})
	]
}