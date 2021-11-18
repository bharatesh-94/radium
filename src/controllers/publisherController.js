const publisherModel= require("../models/publisherModel.js")

//4. Write a post api that creates a publisher resource from the details in the request body
const createPublisher= async function (req, res) {
    var publisherData= req.body
    let savedPublisherData= await publisherModel.create(publisherData)
    res.send({data: savedPublisherData})    
}

module.exports.createPublisher= createPublisher
