const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConf = require('./webpack.common.config.js');
const merge = require('webpack-merge');

let proConf = {
	module:{
		rules:[
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
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	]
}

module.exports = merge(commonConf,proConf);