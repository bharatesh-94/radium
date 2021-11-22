const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.objectId

const userSchema = new mongoose.Schema({

    name: String,

	balance: {
    type: Number,
    default: 100
    },

	address: String,

	age: Number,

 	gender: {
        type: String,
        enum : ["Male","Female", "Other"]
    },
     
	freeAppUser: {
        type: Boolean,
        default: false
    }


    }, {timestamps: true})

    module.exports = mongoose.model("User", userSchema)