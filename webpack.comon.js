const path = require('path');

module.exports = (currentPath) => () => {
  return {
    entry: path.resolve(currentPath, 'index.js'),
    devtool: 'source-map',
    resolve: {
      extensions: [
        '.js'
      ]
    },
    output: {
      filename: 'output.js',
      path: path.resolve(currentPath, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js/,
          loader: "babel-loader"
        }
      ]
    }
  }
}
