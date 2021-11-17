const BookModel = require("../models/bookModel.js");
const AuthorModel= require("../models/authorModel.js")
const mongoose = require("mongoose");

//this will create the books
const createBook = async function (req, res) {
  const book = req.body;
  let savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};

//this will get the data of all the books
const getAllBooksData= async function (req, res) {
  let allBooks= await BookModel.find()
  res.send({msg: allBooks})
}

// this will list out the books written by Chetan Bhagat
const bookAsPerAuthor= async function (req, res) {
  let authorBooks= await BookModel.find({author_id: 1 }).select({bookname:1, _id:0})
  res.send({msg: authorBooks})   
}

// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response
const findAuthorAndUpdatePrice= async function (req, res) {
  let foundTheBook= await BookModel.findOne({bookname: "Two states" })
  let foundAuthor= await AuthorModel.findOne({author_id: foundTheBook.author_id})
  let updatedprice = await BookModel.findOneAndUpdate({bookname: "Two states" },{price : 100}, { new: true})
  res.send({msg: foundAuthor.author_name + " " + updatedprice.price})
}

module.exports.createBook = createBook;
module.exports.getAllBooksData = getAllBooksData;
module.exports.bookAsPerAuthor= bookAsPerAuthor
module.exports.findAuthorAndUpdatePrice= findAuthorAndUpdatePrice
