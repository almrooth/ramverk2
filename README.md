# Me-page for the course "ramverk2" at BTH

* Circle CI 
[![CircleCI](https://circleci.com/gh/almrooth/ramverk2.svg?style=svg)](https://circleci.com/gh/almrooth/ramverk2)

* Code Climate
[![Maintainability](https://api.codeclimate.com/v1/badges/58e3d30409c73d2fc630/maintainability)](https://codeclimate.com/github/almrooth/ramverk2/maintainability)

* Scrutinizer
[![Build Status](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/?branch=master)


## Tech stack
* Express.js server
* Handlebars templating engine
* Markdown support


## Setup
1. Clone the repo
```
$ git clone https://github.com/almrooth/ramverk2.git 
```
2. Install dependencies
```
$ npm install
```
3. Run server
```
$ npm start
```
4. Open in browser `http://localhost:1337`

## Testing
Tests available for app: 
* eslint `npm run eslint`
* stylelint `npm run stylelint`

To Run all tests
```
npm test
```

### Docker
The app can be tested in 3 different docker containers / environments

* Node Alpine latest `npm run test1`
* Node Alpine 8 `npm run test2`
* Node Alpine 7 `npm run test3`
