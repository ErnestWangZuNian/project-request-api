const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = merge(common, {
  mode: 'production',
  main: resolve("src/index.js"),
  output: {
    path: resolve("dist"),
    filename: "wzn-request-api.js",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "wznRequestApi",
  },
  plugins: [new UglifyJSPlugin(), new CleanWebpackPlugin("dist")],
});
