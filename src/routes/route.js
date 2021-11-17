const express = require('express');
const router = express.Router();
const UserModel= require("../models/authorModel")

const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.post('/createBook',  BookController.createBook  );
router.get('/getallBook',  BookController.getAllBooksData  );
router.post('/createAuthor',  AuthorController.createAuthor  );
router.get('/getallAuthor',  AuthorController.getAllAuthor  );
router.get('/getbooksasperauthor',  BookController.bookAsPerAuthor);
router.get('/twostatesauthorandupdateprice',  BookController.findAuthorAndUpdatePrice);
router.get('/authorNameFrom50To100',  AuthorController.findAuthorName50To100);

module.exports = router;