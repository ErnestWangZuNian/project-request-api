const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {}
        },
        exclude: resolve("node_modules"),
      },
    ],
  },
  externals: {
    axios: 'axios',
  },
};
