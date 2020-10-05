const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};