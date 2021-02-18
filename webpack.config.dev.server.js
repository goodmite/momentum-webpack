const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

// TODO - must be
// http://localhost:9999/webpack-dev-server/index.html

module.exports = merge(config, {
  devServer: {
    contentBase: path.resolve("dist"),
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 9999,
  },
});
