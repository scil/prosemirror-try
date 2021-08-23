const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          "source-map-loader", // 为了方便调试 prosemirror-state等的代码，就需要使用他们的map文件
        ],
      },
    ],
  },
};