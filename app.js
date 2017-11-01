const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('morgan');

const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

// Template engine
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// Logger
app.use(logger('dev'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', index);
app.use('/api', api);

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
const port = process.env.DBWEBB_PORT || 1337;

console.log('Server running, listening on port ' + port + '...');
app.listen(port);
