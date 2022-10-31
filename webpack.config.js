const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    welcomePage: './src/welcomePage.js',
    createPlaceShipGrid: './src/createPlaceShipGrid.js',
    gameBoards: './src/gameBoards.js',
    game: './src/game.js',
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
      favicon: 'src/images/battleShip.png',
      chunks: ['welcomePage'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/placeShips.html',
      filename: 'placeShips.html',
      chunks: ['game'],
      favicon: 'src/images/battleShip.png',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/gameBoards.html',
      filename: 'gameBoards.html',
      chunks: ['game'],
      favicon: 'src/images/battleShip.png',
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
