const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    welcomePage: './src/welcomePage.js',
    placeShips: './src/placeShips.js',
    gameBoards: './src/gameBoards.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['welcomePage'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/placeShips.html',
      filename: 'placeShips.html',
      chunks: ['placeShips'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/gameBoards.html',
      filename: 'gameBoards.html',
      chunks: ['gameBoards'],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
