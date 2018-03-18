const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "wzn-request-api.js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "wznRequestApi"
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader" }]
  }
};
