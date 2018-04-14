'use strict'

const webpack = require('webpack')

exports.setup = function(key, value) {
  const env = {
    [key]: JSON.stringify(value)
  }

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}
