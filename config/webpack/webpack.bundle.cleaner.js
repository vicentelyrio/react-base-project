'use strict'

const CleanWebpackPlugin = require('clean-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    plugins: [
      new CleanWebpackPlugin(PATHS.build, {
        root: process.cwd()
      })
    ]
  }
}
