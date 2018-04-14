const path = require('path')

const root = path.resolve(__dirname, '../../')

const PATHS = {
  src: path.resolve(root, 'src'),
  fixtures: path.resolve(root, 'fixtures'),
  build: path.resolve(root, 'dist'),
  fonts: path.resolve(root, 'src/assets/fonts'),
  images: path.resolve(root, 'src/assets/images'),
  svgs: path.resolve(root, 'src/assets/svgs'),
  styles: path.resolve(root, 'src/styles/main.styl')
}

module.exports = PATHS
