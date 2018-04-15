module.exports = {
  'collectCoverageFrom': [
    'src/**/*.js',
    '!src/**/*.styles.js'
  ],
  'coveragePathIgnorePatterns': [
    '<rootDir>/src/index.js'
  ],
  'setupFiles': [
    '<rootDir>/enzyme.js'
  ],
  'testMatch': [
    '<rootDir>/src/**/?(*.)(test).js?(x)'
  ],
  'testURL': 'http://localhost',
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ],
  'moduleFileExtensions': [
    'js',
    'json',
    'jsx',
    'node'
  ],
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  'moduleNameMapper': {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileMock.js',
    '\\.(css|less)$': '<rootDir>/styleMock.js'
  }
}
