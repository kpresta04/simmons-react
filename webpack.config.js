const path = require("path");

module.exports = env => {
  const isProd = env === "production";
  return {
    entry: "./app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    devtool: isProd ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};

// module.exports = {
//   entry: "./app.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react"],
//             plugins: ["@babel/plugin-proposal-class-properties"]
//           }
//         }
//       },
//       {
//         test: /\.s?css$/,
//         use: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
//   devtool: "cheap-module-eval-source-map",
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true
//   }
// };
