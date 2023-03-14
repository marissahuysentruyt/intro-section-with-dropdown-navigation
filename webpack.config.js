const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app_bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require("autoprefixer")
                  ];
                }
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  plugins: [
    // Plugin to use project's index.html as template for dist folder
    new HtmlWebpackPlugin({ template: "index.html"}),
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
};