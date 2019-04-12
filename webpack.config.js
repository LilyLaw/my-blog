const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.jsx'
	},
	module:{
		rules:[
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets:['@babel/preset-env','@babel/preset-react']
					}
				}
			},
			{
				test: /\.(png|jpg|gif|bmp)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'路立琳的个人空间',
			template: './src/index.html',
			favicon: './src/favicon.ico'
		})
	],
	devServer: {
		port:3011,
		historyApiFallback:{
    		index:"/dist/index.html"
    	}
	}
}