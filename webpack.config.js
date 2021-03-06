const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env) => {
	const isProd = env === "production";

	return {
		entry: "./app.js",
		output: {
			path: path.join(__dirname, "public"),
			filename: "bundle.js",
		},

		plugins: [
			new MiniCssExtractPlugin(),
			new CompressionPlugin({
				filename: "[path].gz[query]",
				algorithm: "gzip",
				test: /\.js$|\.css$|\.html$/,
				threshold: 10240,
				minRatio: 0.8,
			}),
			new CompressionPlugin({
				filename: "[path].br[query]",
				algorithm: "brotliCompress",
				test: /\.(js|css|html|svg)$/,
				compressionOptions: { level: 11 },
				threshold: 10240,
				minRatio: 0.8,
			}),
		],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-react"],
							plugins: ["@babel/plugin-proposal-class-properties"],
						},
					},
				},
				{
					test: /\.s?css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								esModule: true,
							},
						},
						{ loader: "css-loader", options: { sourceMap: true } },
						{ loader: "sass-loader", options: { sourceMap: true } },
					],
				},
			],
		},
		devtool: isProd ? "source-map" : "inline-source-map",
		devServer: {
			contentBase: path.join(__dirname, "public"),
			historyApiFallback: true,
		},
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
