const Usermodel = require("../models/userModel.js")
const jwt = require('jsonwebtoken');


let checkToken = async function (req, res, next) {
    reqToken = req.headers['x-auth-token']
    if (reqToken){
        let decoded = jwt.verify(reqToken, 'unlock')
        if(decoded){
            req.decoded = decoded
            next()
        } else res.send({msg: "token cannot be decoded"})
    } else res.send({msg: "token is missing"}) 

}

module.exports.checkToken = checkToken