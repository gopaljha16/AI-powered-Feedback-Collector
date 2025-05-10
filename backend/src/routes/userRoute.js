const express = require("express");
const userMiddleware = require("../middleware/userMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {register , login , logout , adminRegister } = require("../controllers/userAuthenticate")
const authRouter = express.Router();

authRouter.post("/regiser"  , register);
authRouter.post("/login"  , login);
authRouter.post("/logut", userMiddleware  , logout)
authRouter.post("/admin/register" , adminMiddleware , adminRegister);


module.exports = authRouter;