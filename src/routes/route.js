const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const middleware= require("../middlewares/Middlewares")

router.get('/aPathThatLogsMiddlewareData', middleware.middleWareFunction, UserController.basicCode);

module.exports = router;