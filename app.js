const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const api   = require('./routes/api');
const books = require('./routes/books');

const app = express();
const server = http.createServer(app);

// Websocket chat server
const wss = require('./src/chat/server');

wss(server);

// Template engine
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// Logger
if (process.env.NODE_ENV == "production") {
    app.use(logger('combined'));
} else {
    app.use(logger('dev'));
}

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', index);
app.use('/api', api);
app.use('/books', books);

// 404
app.use((req, res, next) => {
    let err = new Error('Not Found');

    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render('error', {
        title: 'Error',
        error: err
    });
});

// Start server
const port = normalizePort(process.env.DBWEBB_PORT || '1337');

console.log('Server running, listening on port ' + port + '...');
server.listen(port);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
