const AuthorModel= require("../models/authorModel.js")
const BookModel = require("../models/bookModel.js");
const mongoose = require("mongoose");

const createAuthor= async function (req, res) {
    var author= req.body
    let authorData= await AuthorModel.create(author)
    res.send({msg: authorData})    
}

const getAllAuthor= async function (req, res) {
    let fullListOfAuthor= await AuthorModel.find()
    res.send({msg: fullListOfAuthor}) 
}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books
const findAuthorName50To100= async function (req, res) {
    let book50To100= await BookModel.find({$and:[{price:{$gte:50}},{price:{$lte:100}}]})
    authorfinal = []
for (let i=0; i < book50To100.length; i++){
    let foundItsAuthor= await AuthorModel.find({author_id: book50To100[i].author_id}).select({author_name:1, _id:0})
    authorfinal.push(foundItsAuthor)
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let unique = authorfinal.filter(onlyUnique);  
    res.send({msg: unique})

}
module.exports.createAuthor= createAuthor
module.exports.getAllAuthor= getAllAuthor
module.exports.findAuthorName50To100= findAuthorName50To100

