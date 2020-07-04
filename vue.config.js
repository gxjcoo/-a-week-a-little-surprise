const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
// dev port
const port = process.env.port || process.env.npm_config_port || 8080;
const name = "demo";
module.exports = {
  devServer: {
    open: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    },
    // before: require("./mock/mock-server.js"),
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
        // "@com": resolve("src/components/common"),
        // "@bus": resolve("src/components/bussiness")
      }
    }
  }
};
