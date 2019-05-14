const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry:"./src/app.js",
	output:{
		filename:'app.[hash].js',
		path: path.resolve(__dirname,'dist')
	},
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
				test:/\.css$/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test:/\.less$/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			},
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
	plugins: [
		new CleanWebpackPlugin(),
	    new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
	    }),
	    new HtmlWebpackPlugin({
			title:'LilyLaw的个人空间',
			template: './src/index.html',
			filename: 'index.html',
			favicon: './src/favicon.ico'
		})
  ],
}