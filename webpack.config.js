const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  mode: 'production',
  module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
        },
      ]
  }
};