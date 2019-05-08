module.exports = {
	mode: 'development',
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
	}
}