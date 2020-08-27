const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }}]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  }
};
