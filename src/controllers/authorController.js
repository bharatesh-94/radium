const authorModel= require("../models/authorModel.js")


// 1. Write a create author api that creates an author from the details in request body
const createAuthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({data: savedData})    
}


// const getAuthors= async function (req, res) {
//     let allAuthors= await authorModel.find()
//     res.send({data: allAuthors})
// }

module.exports.createAuthor= createAuthor
// module.exports.getAuthors= getAuthors