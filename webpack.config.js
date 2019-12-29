// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const themeVariables = lessToJs(
	fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8')
);

// SERVER CONFIG
const serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname,
		filename: 'server.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-object-rest-spread']
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	],
	mode: 'development'
};

// BROWSER CONFIG
const browserConfig = {
	entry: './src/browser/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-object-rest-spread']
						}
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// Creates `style` nodes from JS strings
					// 'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					// { loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'less-loader',
						options: {
							modifyVars: themeVariables,
							javascriptEnabled: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	mode: 'development'
};

module.exports = [serverConfig, browserConfig];

// module.exports = {
// 	entry: {
// 		app: './src/index.js'
// 	},
// 	output: {
// 		filename: 'app.compiled.js',
// 		path: path.resolve(__dirname, 'dist')
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				use: [
// 					{
// 						loader: 'babel-loader',
// 						options: {
// 							presets: ['@babel/preset-env', '@babel/preset-react'],
// 							plugins: [['import', { libraryName: 'antd', style: true }]]
// 						}
// 					}
// 				],
// 				exclude: /node_modules/
// 			},
// 			{
// 				test: /\.s[ac]ss$/i,
// 				use: [
// 					// Creates `style` nodes from JS strings
// 					'style-loader',
// 					// Translates CSS into CommonJS
// 					'css-loader',
// 					// Compiles Sass to CSS
// 					'sass-loader'
// 				]
// 			},
// 			{
// 				test: /\.less$/,
// 				use: [
// 					{ loader: 'style-loader' },
// 					{ loader: 'css-loader' },
// 					{
// 						loader: 'less-loader',
// 						options: {
// 							modifyVars: themeVariables,
// 							javascriptEnabled: true
// 						}
// 					}
// 				]
// 			}
// 		]
// 	},
// 	resolve: {
// 		extensions: ['.js', '.jsx', '.json']
// 	},
// 	plugins: [
// 		new Dotenv({
// 			path: './.env'
// 		}),
// 		new HtmlWebpackPlugin({
// 			template: './dist/index.html',
// 			favicon: './favicon.jpg'
// 		})
// 	],
// 	devServer: {
// 		contentBase: path.join(__dirname, 'dist'),
// 		watchContentBase: true,
// 		port: 8000
// 	},
// 	mode: 'development'
// };
