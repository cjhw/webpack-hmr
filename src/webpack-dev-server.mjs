import webpack from "webpack";
import config from "../webpack.config.mjs";
import Server from "./lib/server/index.mjs";

// 创建webpack-dev-server服务器
// 创建webpack实例
const compiler = webpack(config);
// 创建Server实例
const server = new Server(compiler);

server.listen(8000, "localhost", () => {
  console.log(`Project is running at http://localhost:8000/`);
});
