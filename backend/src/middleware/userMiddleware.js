const jwt = require("jsonwebtoken");
const User = require("../models/user");
const redisClient = require("../config/redis");


const userMiddleware = async (req , res , next) =>{
    try{

        const {token } = req.cookies;

        if(!token)
            return res.status(404).send("Token Is Missing");

        const payload = jwt.verify(token , process.env.JWT_SECRET_KEY);

        if(!payload)
            return res.status(403).send("Token is Missing");

        const {_id } = payload

        if(!_id)
            throw new Error("Id Is Missing");


        const result = await User.findById(_id);

        if(!result)
            throw new Error(" Id is Missing");

        const isBlocked = await  redisClient.exists(`token:${token}`);

        if(isBlocked)
            throw new Error("Invalid Token");

        req.result = result;

        next();

    }catch(err){
        res.status(404).send("Error Occcured :- " + err);
    }
}

module.exports = userMiddleware;