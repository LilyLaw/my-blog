const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/app.js',
	output:{
		filename: 'main.[hash].js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
	    rules: [
	      {
	        test: /\.(png|jpg|gif)$/,
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
			title:'LilyLaw的个人空间',
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon.ico'
		})
	]
}