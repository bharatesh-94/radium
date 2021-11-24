const express = require('express');
const router = express.Router();
const Usermodel = require("../models/userModel.js")

const UserController= require("../controllers/userController.js")
const GlobalMiddleware= require("../middlewares/globalMiddleware.js")


router.post('/users', UserController.createUser);

router.post('/login', UserController.loginUser);


router.get('/users/:userId', GlobalMiddleware.checkToken, UserController.returnUser);

router.put('/users/:userId', GlobalMiddleware.checkToken, UserController.updateEmail);










// router.post('/createProduct', async function (req, res) {    
//     var productdata = req.body
//     let savedProductData = await Productmodel.create(productdata)
//     res.send({data: savedProductData})
   
// });
    


// router.post('/createUser', globalMiddleware.checkHeader , async function (req, res) {    
//     var userdata = req.body
//     let savedUserData = await Usermodel.create(userdata)
//     res.send({data: savedUserData})
   
// });


// router.post('/orderPurchases', globalMiddleware.checkHeader , globalMiddleware.validateUser, globalMiddleware.validateProduct, async function (req, res) {    
//     var orderdata = req.body
//     let IdOfUser = req.body.userId
//     let IdOfProduct = req.body.productId
//     let userBalance = await Usermodel.findOne({ _id: IdOfUser })
//     let productPrice = await Productmodel.findOne({ _id: IdOfProduct })
//     if (req.headers.isfreeapp == "false"){
//         if(userBalance.balance >= productPrice.price){
//             let orderCreated = await Ordermodel.create(orderdata)
//             let orderUpdated = await Ordermodel.findOneAndUpdate({ _id: orderCreated._id},{$set: {amount: productPrice.price, isFreeAppUser: false}},{new: true}) 
//             let remainingBalance = userBalance.balance-productPrice.price
//             let updatedBalance = await Usermodel.findOneAndUpdate({ _id: IdOfUser }, {balance: remainingBalance},{new:true})         
//             res.send({data: orderUpdated, userBalance: updatedBalance.balance})
//         } else { res.send({data: "insufficient balance to place order"}) }
//     } else {
//         let savedOrderData = await Ordermodel.create(orderdata)
//         let freeOrder = await Ordermodel.findOneAndUpdate({ _id: savedOrderData._id},{$set: {amount: 0, isFreeAppUser: true}},{new: true})
//         res.send({data: freeOrder, userBalance: userBalance.balance})
//     }
// });


// // router.post('/createProduct', function (req, res, next) {    
// //     console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
// //     let host = req.headers['host']
// //     let hostWithName = host + " " + "Sabiha Khan"
// //     console.log('My response headers: '+res.getHeaderNames())
// //     res.setHeader('hostWithName', hostWithName)
// //     //res.send({data: 'I was in the handler'})
// //     res.finalData = {data: 'I was in the handler'}
// //     next()
// // });

module.exports = router;