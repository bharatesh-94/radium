const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController= require("../controllers/publisherController")


// Authors API
router.post('/createauthor',  authorController.createAuthor  );
// router.get('/getallauthors',  authorController.getAuthors  );

// // Books API
router.post('/createbooks',  BookController.createBook  );
router.get('/getallbooks',  BookController.getBooks  );
// router.get('/book',  BookController.getBook  );

// // Publisher API
router.post('/createpublisher',  PublisherController.createPublisher  );


module.exports = router;