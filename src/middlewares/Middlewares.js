const moment = require('moment');
const date = moment();


const middleWareFunction= function (req, res, next) {
    console.log(date.format('MMMM Do YYYY, h:mm:ss a'))
    console.log(req.ip)
    console.log(req.path)
    next()    
}

module.exports.middleWareFunction= middleWareFunction


