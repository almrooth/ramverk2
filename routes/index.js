const express = require('express');
const router = express.Router();
const fs = require('fs');
const md = require('markdown-it')();


// Return content of file if exists else false
const getContentFromFile = file => {
    if (!fs.existsSync(file)) {
        return false;
    }
    return fs.readFileSync(file, 'utf8');
};


// Index route
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hem'
    });
});

// About route
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// Reports routes
router.get('/reports/:page', (req, res, next) => {
    let page = req.params.page;
    let fileName = './content/reports/' + page + '.md';

    // Get content from file if exists else false
    let content = getContentFromFile(fileName);

    // If no file exists exit router
    if (!content) {
        return next();
    }

    // Parse content from markdown
    let html = md.render(content);

    res.render('content', {
        title: page,
        content: html
    });
});


module.exports = router;
