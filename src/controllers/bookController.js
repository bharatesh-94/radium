const BookModel= require("../models/bookModel.js")
const mongoose= require("mongoose")

//Assignment - createBook
const createBook = async function (req, res) {
    const book= req.body
    let savedBook= await BookModel.create(book)
    res.send({msg: savedBook})
}

//Assignment - bookList
const bookList= async function (req, res) {
    let findAllBook= await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg: findAllBook})
}

//Assignment - getBooksInYear
const getBooksInYear= async function (req, res) {
    const findBook= req.body.year
    let findYearBook= await BookModel.find({year: findBook})
    res.send({msg: findYearBook})
}

//Assignment - getParticularBooks
const getParticularBooks= async function (req, res) {
    let findParticularBook= await BookModel.find(req.body)
    res.send({msg: findParticularBook})
}

//Assignment - getXINRBooks
const getXINRBooks= async function (req, res) {
    let findINRBook = await BookModel.find({"prices.indianPrice":{ $in:["100INR", "200INR", "500INR"]}})
    res.send({msg: findINRBook})
}

//Assignment - getRandomBooks 
const getRandomBooks = async function (req, res) {
    let findRandomBook= await BookModel.find({$or:[ {stockAvailable: true}, { totalPages: {$gt:500}} ]})
    res.send({msg: findRandomBook})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks