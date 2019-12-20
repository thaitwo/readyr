const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'app.compiled.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		port: 8000
	},
	mode: 'development'
};
