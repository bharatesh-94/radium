const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    userId: objectId,
    productId: objectId,
    amount: Number,
    isFreeAppUser: Boolean, 
    date: Date
 
}, {timestamps: true})

    module.exports = mongoose.model("Order", orderSchema)