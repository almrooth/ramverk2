const express = require('express');
const router = express.Router();
const fs = require('fs');

// Return content of file if exists else false
const getContentFromFile = file => {
    if (!fs.existsSync(file)) {
        return false;
    }
    return {
        'content': fs.readFileSync(file, 'utf8')
    };
};

// Route for content
router.get('/content/:page', (req, res, next) => {
    let page = req.params.page;

    let fileName = './content/'+ page +'.md';

    let content = getContentFromFile(fileName);

    if (!content) {
        return next();
    }
    res.json(content);
});

// Route for content in folder
router.get('/content/:folder/:page', (req, res, next) => {
    let page = req.params.folder + "/" + req.params.page;

    let fileName = './content/' + page + '.md';

    let content = getContentFromFile(fileName);

    if (!content) {
        return next();
    }
    res.json(content);
});

module.exports = router;
