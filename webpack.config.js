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
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'路立琳的个人空间',
			template: './src/index.html'
		})
	],
	devServer: {
		port:3011,
		historyApiFallback:{
    		index:"/dist/index.html"
    	}
	}
}