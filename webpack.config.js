const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'js/app.jsx'
	},
	module:{
		rules:[
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
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					'less-loader'
				]
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
			title:'我的个人空间',
			template: './src/index.html',
			favicon: './src/favicon.ico'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
	],
	devServer: {
		port:3011,
		historyApiFallback:{
    		index:"/dist/index.html"
    	}
	}
}