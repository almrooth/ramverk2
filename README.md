# Me-page for the course "ramverk2" at BTH

* Circle CI
[![CircleCI](https://circleci.com/gh/almrooth/ramverk2.svg?style=svg)](https://circleci.com/gh/almrooth/ramverk2)

* Code Climate
[![Maintainability](https://api.codeclimate.com/v1/badges/58e3d30409c73d2fc630/maintainability)](https://codeclimate.com/github/almrooth/ramverk2/maintainability)

* Scrutinizer
[![Build Status](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/almrooth/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/almrooth/ramverk2/?branch=master)

Me-page for the course "ramverk2" at Blekinge Tekniska Högskola.

The page is built using JavaScript and has a Express.js server for the back-end. Pages are renderd by the server using Handlebars templating engine. Some content is written in markdown files and parsed into the page.

The chat page uses WebSockets for real-time communication and the "Biblioteket" page uses a MongoDB to store the data used for showcasing CRUD. For the CRUD functionality I have developed a npm module "mongo-crud-simple" that handles the communication agains the database.

Testing is done through Mocha and linting and codestyle analysis is done with ESLint and Stylelint. During development Continuous Integrationi with CircleCI and Scrutinizer has been used test each commit and build.

## Tech stack
* Express.js server
* Handlebars templating engine
* Markdown support
* Testing with Mocha
* WebSocket
* MongoDB
* Docker

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
The app can be run in Docker. (docker & docker-compose required)

To start the containers:
```
$ npm run start-docker
```
Stop the containers:
```
$ npm run stop-docker
```

**Testing in docker**
Testing of the app can be done in 3 different docker containers each using a different version of node.

Latest version of node:
```
$ npm run test-docker-latest
```

Node version 8:
```
$ npm run test-docker-latest
```

Node version 7
```
$ npm run test-docker-latest
```

## Ports and environment variables

### Express server
By default the server will start on port 1337. If you wish to use another port set env variable `DBWEBB_PORT`.

### MongoDB
By default the server will connect to DSN `mongodb://127.0.0.1:27017/ramverk2`. If u wish to use another database DSN set env variable `DBWEBB_DSN`.
