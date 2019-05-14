const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let commonConf = require('./webpack.common.config.js');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let proConf = {
	mode:'production',
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets:['@babel/preset-env','@babel/preset-react']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.less/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	]
}

module.exports = merge(commonConf,proConf);