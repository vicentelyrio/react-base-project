'use strict'

exports.setup = function(PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.(css|styl)/,
          include: [PATHS.src, PATHS.storybook],
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        }
      ]
    }
  }
}
