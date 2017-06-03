const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/main-aot.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'src', 'dist'),
    filename: 'build.js'
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig-aot.json'
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  module: {
    rules: [
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  }
}
