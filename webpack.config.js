const path = require('path');

const APP_DIR = path.resolve(__dirname, './');

module.exports = {
  entry: APP_DIR + '/app/client/index.jsx',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react'
          ]
        }
      }
    ]
  }
}
