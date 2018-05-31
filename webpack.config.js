const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    "greeter": path.join(__dirname, 'src', 'index.ts'),
    "greeter.min": path.join(__dirname, 'src', 'index.ts')
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: "umd",
    library: "lib",
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
    root: path.resolve('./src'),
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min\.js$/
    })
  ]
};