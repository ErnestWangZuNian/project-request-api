const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "common-utils.js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "commonutils"
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader" }]
  }
};
