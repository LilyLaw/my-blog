const merge = require('webpack-merge'),
	commonConf = require('./webpack.common.config.js');

let devConf = {
	devtool: 'inline-source-map',	// 使用sourcemap定位代码
	module:{
		rules:[
			{
				test: /\.css$/,
				loader: ['style-loader','css-loader']
			},
			{
				test: /\.less/,
				loader: ['style-loader','css-loader','less-loader']
			}
		]
	},
	devServer: {
		compress: true,
		port: 3012
	}
}

module.exports = merge(commonConf,devConf);