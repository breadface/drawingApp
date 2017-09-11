var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

module.exports = {
  entry: [
    // // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './build/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.join(__dirname, 'src')//,
        // options: {
        //   plugins: ['react-hot-loader/webpack']
        // }
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style!css!sass',
      }
    ]
  },
  devServer: {
    hot: false
  }
}
