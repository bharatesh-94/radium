const Usermodel = require("../models/userModel.js")
const Productmodel = require("../models/productModel.js")
const Ordermodel = require("../models/orderModel.js")


let checkHeader = function (req, res, next) {
    let checkHeaderValue = req.headers.isfreeapp
    if (checkHeaderValue === undefined){
        res.send('request is missing a mandatory header isFreeApp')
    } else {
        next()
    } 
}


let validateUser = async function (req, res, next) {
    let userIdFromClient = req.body.userId
    let foundUser = await Usermodel.findOne({ _id: userIdFromClient })
    if (foundUser){
        next()
    } else {
        res.send('User ID is not valid')
    } 
}

let validateProduct = async function (req, res, next) {
    let productIdFromClient = req.body.productId
    let foundProduct = await Productmodel.findOne({ _id: productIdFromClient})
    if (foundProduct){
        next()
    } else {
        res.send('Product ID is not valid')
    } 
}

module.exports.checkHeader = checkHeader
module.exports.validateUser = validateUser
module.exports.validateProduct = validateProduct