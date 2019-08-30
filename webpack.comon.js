const path = require('path');

module.exports = (currentPath) => () => {
  return {
    entry: path.resolve(currentPath, 'index.js'),
    devtool: 'inline-source-map',
    resolve: {
      extensions: [
        '.js'
      ]
    },
    output: {
      filename: `output.js`,
      path: path.resolve(currentPath, 'dist')
    }
  }
}
