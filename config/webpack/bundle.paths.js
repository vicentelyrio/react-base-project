const path = require('path')

exports.setup = function(root) {
  return {
    root,
    src: path.resolve(root, 'src'),
    fixtures: path.resolve(root, 'fixtures'),
    locales: path.resolve(root, 'locales'),
    build: path.resolve(root, 'dist'),
    fonts: path.resolve(root, 'src/assets/fonts'),
    images: path.resolve(root, 'src/assets/images'),
    svgs: path.resolve(root, 'src/assets/svgs'),
    styles: path.resolve(root, 'src/styles/main.styl'),
    storybook: path.resolve(root, '.storybook')
  }
}
