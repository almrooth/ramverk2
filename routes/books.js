const express = require('express');
const router = express.Router();

const dsn = process.env.DBWEBB_DSN || 'mongodb://127.0.0.1:27017/ramverk2';
const books = require('../src/db/mongo-crud')(dsn, 'books');


/**
 * Index route, get all books
 */
router.get('/', async (req, res) => {
    let data = await books.index();

    res.render('books/index', {
        title: 'Böcker',
        books: data
    });
});


/**
 * Create route, create form
 */
router.get('/create', (req, res) => {
    res.render('books/create', {
        title: 'Ny bok'
    });
});


/**
 * Create route, insert into DB
 */
router.post('/create', async (req, res) => {
    let item = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        bookUrl: req.body.bookUrl,
        imgUrl: req.body.imgUrl
    };

    await books.create(item);

    res.redirect('/books');
});


/**
 * Show route, get single book
 */
router.get('/:id', async (req, res) => {
    let id = req.params.id;

    let book = await books.read(id);

    res.render('books/show', {
        title: book.title,
        book: book
    });
});


/**
 * Edit route, edit form
 */
router.get('/:id/edit', async (req, res) => {
    let id = req.params.id;

    let book = await books.read(id);

    res.render('books/edit', {
        title: book.title,
        book: book
    });
});


/**
 * Edit route, update DB
 */
router.post('/:id/edit', async (req, res) => {
    let id = req.params.id;
    let item = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        bookUrl: req.body.bookUrl,
        imgUrl: req.body.imgUrl
    };

    await books.update(id, item);

    res.redirect('/books');
});


/**
 * Delete route, delete from DB
 */
router.get('/:id/delete', async (req, res) => {
    let id = req.params.id;

    await books.delete(id);

    res.redirect('/books');
});


/**
 * Export routes
 */
module.exports = router;
