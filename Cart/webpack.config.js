const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/bootstrap.js",
      },
      shared:['faker']
      // shared:{
      //   faker:{
      //     singleton:true
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
