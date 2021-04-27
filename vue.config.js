const path = require("path");
module.exports = {
  publicPath: "./",
  outputDir: "../www/",
  // assetsDir: "static",
  chainWebpack: config => {
    config.resolve.alias.set("@$", path.join(__dirname, "src"));
  },
  configureWebpack: {
    // entry: "./src/main.js",
    devtool: "source-map",
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
};