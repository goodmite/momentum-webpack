const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const pModules = path.resolve("node_modules");
const pBuild = path.resolve("dist");
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'momentum boilerplate',
      template: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pBuild}/fonts` },
        { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pBuild}/icons/fonts` },
        { from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.css`, to: `${pBuild}/css` },
        { from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.min.css`, to: `${pBuild}/css` },
      ],
    }),

  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: "css-loader" },{ loader: "style-loader" }],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        loader: "file-loader",
        options: {
          name: "/asset/images",
        },
      },
      
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          name: "/asset/resource",
        },
      }
    ],
  },
};

// const dev = {
//   name: "dev",
//   mode: "development",
//   entry: "./index.jsx",
//   output: {
//     path: path.resolve("build"),
//     filename: "index.js",
//     publicPath: "/",
//   },
//   devtool: "source-map",
//   module: { rules: RULES },
//   plugins: [
//     // new webpack.ProvidePlugin({ fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch" }),
//     new HtmlWebpackPlugin({ template: "index.html" }),
//     new CopyPlugin({
//       patterns: [
//         { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pBuild}/fonts` },
//         { from: `${pModules}/@momentum-ui/icons/fonts`, to: `${pBuild}/icons/fonts` },
//         { from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.css`, to: `${pBuild}/css` },
//         { from: `${pModules}/@momentum-ui/icons/css/momentum-ui-icons.min.css`, to: `${pBuild}/css` },
//       ],
//     }),
//     new CleanWebpackPlugin(),
//     new Dotenv({
//       path: path.resolve("./.env"),
//       systemvars: true,
//     }),
//   ],
//   node: { fs: "empty" },
// };