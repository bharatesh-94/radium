const express = require('express');
const router = express.Router();

const cryptoController= require("../controllers/cryptoController")

router.get("/cryptodata", cryptoController.getCryptoData)
// router.get("/cowin/states", cowinController.getStatesList)
// router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
// router.get("/cowin/centers", cowinController.getByPin)
// router.post("/cowin/getOtp", cowinController.getOtp)


module.exports = router;