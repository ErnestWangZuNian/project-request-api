const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyESPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: resolve("src/index.js"),
  },
  output: {
    path: resolve("dist"),
    filename: "wzn-request-api.js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "wznRequestApi",
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new UglifyESPlugin(),
  ]
});
