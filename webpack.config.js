const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge');

const baseConfig = {
	mode: 'development',
	entry: {
		"greeter": path.join(__dirname, 'src', 'index.ts'),
		"greeter.min": path.join(__dirname, 'src', 'index.ts'),
	},
	devtool: "source-map",
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'lib'),
		libraryTarget: 'umd',
		globalObject: 'this',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /.tsx?$/,
			include: [
				path.resolve(__dirname, 'src')
			],
			exclude: /node_modules/,
			loader: 'ts-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	plugins: [
		// new UglifyJsPlugin({
		// 	sourceMap: true,
		// 	include: /\.min\.js$/
		// })
	]
};

// const serverConfig = merge(baseConfig, { target: "node", output: {
// 	filename : '[name].node.js'
// }})
// const clientConfig = merge(baseConfig, { target: "web"})

module.exports = [baseConfig]