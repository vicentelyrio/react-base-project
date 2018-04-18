'use strict'

exports.setup = function() {
  return {
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  }
}
