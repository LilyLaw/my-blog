const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/app.js',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'app.js'
	},
	module:{
		rules:[
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/,
				use:[
					{
						loader: 'url-loader',
						options: {
							limit : 10000
						}
					},
				]
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