var path = require('path')

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },
  devtool: 'inline-source-map'
}
