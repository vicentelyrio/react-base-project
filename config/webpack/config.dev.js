'use strict'

const merge = require('webpack-merge')

const server = require('./server')
const styles = require('./loader.styles')

const sourceMapType = {
  devtool: 'eval-source-map'
}

exports.setup = function(PATHS) {
  return merge(
    sourceMapType,
    styles.setup(PATHS),
    server.setup(PATHS)
  )
}
