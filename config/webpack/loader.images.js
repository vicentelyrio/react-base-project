'use strict'

exports.setup = function(PATHS) {
  return {
    module: {
      rules: [
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          include: PATHS.images,
          use: [
            {
             loader: 'file-loader',
             options: {
               query: {
                 hash: 'sha512',
                 digest: 'hex',
                 name:'[name].[hash].[ext]'
               }
             }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  name:'[name].[hash].[ext]',
                  mozjpeg: {
                    progressive: true
                  },
                  gifsicle: {
                    interlaced: true
                  },
                  optipng: {
                    optimizationLevel: 7
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
