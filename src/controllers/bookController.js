const bookModel = require("../models/bookModel.js");
const authorModel= require("../models/authorModel.js")
const publisherModel= require("../models/publisherModel.js")

//2.Write a create book api that takes author from the request body. 
//You have to first check if authorId is present as well a valid authorId. A valid authorId is which is present in your authors collection. 
//Also make sure you receive a publisherId in the request and validate this id. A valid publisherId is which is present in your publishers collection.
const createBook = async function (req, res) {
  let book = req.body
  const authorID = req.body.author
  const publisherID = req.body.publisher
  let authorFromRequest = await authorModel.findById(authorID)
  let publisherFromRequest = await publisherModel.findById(publisherID)

  if (authorID){
    if(authorFromRequest){
      if (publisherID) {
        if(publisherFromRequest){
          let bookCreated = await bookModel.create(book); 
          res.send({ data: bookCreated });
        } else res.send({ data: "Publisher ID provided is not valid"})
      } else res.send({ data: "Please provide publisher ID"})
    } else res.send({ data: "Author ID provided is not valid"})
  } else res.send({ data: "Please provide Author ID"})
}

//3. Write a get books api that fetches all the books along with their author details (you have to populate author)
//& 
//5. Update the 3rd api (GET /books) such that in the authors details you receive _id, author_name and age.
const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author', { _id: 1, author_name:1, age:1})
  res.send({ msg: allBooks });
};


module.exports.createBook = createBook;
module.exports.getBooks = getBooks; 