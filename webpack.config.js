const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    overlay: true
  },
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }},
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
      ignoreOrder: true
    }),
  ]
};
