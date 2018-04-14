'use strict'

const merge = require('webpack-merge')

const server = require('./webpack.server')
const styles = require('./webpack.loader.styles')

const sourceMapType = {
  devtool: 'eval-source-map'
}

exports.setup = function(PATHS) {
  return merge(
    sourceMapType,
    // styles.setup(PATHS),
    // eslint.setup(PATHS),
    // server.setup(PATHS)
  )
}
