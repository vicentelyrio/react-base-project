# Base React Project #

A React project served by Webpack and tested with Jest

## Stack ##
Webpack
Babel

Jest
Enzyme
Sinon
Faker
Rosie

React
React Router
PropTypes
QueryString

Stylus
ClassNames
BemClassNames


## Installing ##

```
$ yarn
```

## Running ##

```
$ yarn start
```

Using Webpack Dashboard
```
$ yarn start:dashboard
```

## Testing ##

```
$ yarn test
```

Watching
```
$ yarn test:watch
```

Coverage
```
$ yarn test:coverage
```

Open Coverage Report (osx only)
```
$ yarn test:coverage:open
```

## Lint ##
```
$ yarn lint
```

Linting JS only
```
$ yarn lint:js
```

Fixing JS
```
$ yarn lint:js:fix
```

Linting Styles only
```
$ yarn lint:styles
```

## i18n ##

#### 1. Create entries using `react-intl`'s `FormattedMessage` ####

#### 2. Keys are created automatically on `locales/src` ####

#### 3. Export keys to `.pot` file with ####
```
$ yarn i18n:export:pot
```

#### 4. Translate `.pot` file to a `.po` file using some editor like `Poedit` ####

#### 5. Transform translated `.po` files in to json for the App to load it ####
```
$ yarn i18n:export:json
```
