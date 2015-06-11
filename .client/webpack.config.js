module.exports = {
  entry: "./main.js",
  output: {
    path: '../client',
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-multi-loader" },
    ]
  }
}
