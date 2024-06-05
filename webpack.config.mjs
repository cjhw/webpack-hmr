import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(import.meta.dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin(), //输出一个html，并将打包的chunk引入
    new webpack.HotModuleReplacementPlugin(),
  ],
};
