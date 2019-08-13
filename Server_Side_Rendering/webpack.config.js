const path = require('path');


module.exports = {
  mode: 'none',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
