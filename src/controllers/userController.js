const Usermodel= require("../models/userModel.js")
const jwt = require('jsonwebtoken');

//create the user
const createUser= async function (req, res) {
    var userData= req.body
    let savedUserData= await Usermodel.create(userData)
    res.send({msg: savedUserData})    
}


const loginUser= async function (req, res) {
    var userName= req.body.name
    var userPassword= req.body.password
    let validUser = await Usermodel.findOne({ name: userName, password: userPassword, isDeleted: false})
    if (validUser){
        let userToken = jwt.sign({ userId: validUser._id }, 'unlock');
            res.send({status: true, data: validUser, token:userToken})         
    }else res.send({status: false, message: "invalid user"}) 
}

const returnUser= async function (req, res) {
    userIdFromReq = req.params.userId
    if (req.decoded.userId == userIdFromReq){
    let FoundUser = await Usermodel.findOne({ _id: userIdFromReq,  isDeleted: false})
        if(FoundUser){
             res.send({status: true, data: FoundUser}) 
        } else res.send({status: false, data: "User is not found"}) 
    }else res.send({status: false, data: "User not authorised"}) 

}

const updateEmail = async function (req, res) {
    userId= req.params.userId
    newEmail = req.body.email
    if (req.decoded.userId == userId){
        let FoundUser = await Usermodel.findOne({ _id: userId,  isDeleted: false})
        if(FoundUser){
            let withUpdateEmail = await Usermodel.findOneAndUpdate({ _id: userId,  isDeleted: false},{email:newEmail},{new: true})
            res.send({status: true, data: withUpdateEmail}) 
        } else res.send({status: false, message: "User is not valid"}) 
    } else res.send({status: false, data: "User not authorised"}) 
}



module.exports.createUser= createUser
module.exports.loginUser= loginUser
module.exports.returnUser= returnUser
module.exports.updateEmail= updateEmail