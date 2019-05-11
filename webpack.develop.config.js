const merge = require('webpack-merge');
let	commonConf = require('./webpack.common.config.js');

let devConf = {
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
					},
					'eslint-loader'
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.less/,
				use: ['style-loader','css-loader','less-loader']
			}
		]
	},
	devServer: {
		compress: true,
		port: 3012
	}
}

module.exports = merge(commonConf,devConf);