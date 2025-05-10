const validate = require("../utils/validator")
const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");


const register = async (req, res) => {
    try {
        const { firstName, emailId, password } = req.body;
        validate(req.body);

        if (!firstName || !emailId || !password)
            throw new Error("Fields Missing");

        req.body.password = bcrypt.hash(password, 10);

        const user = await User.create(req.body);

        req.body.role = "user";

        const token = jwt.sign({ _id: user._id, emailId: user.emailId, role: "user" }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 });


          if(!token)
            throw new Error(" Token is missing")

        res.cookies("token ", token, { maxAge: 60 * 60 * 1000 });

        res.status(201).send("User Registered Successfully");


    } catch (err) {
        res.status(404).send("Error Occured" + err);
    }
}

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;

        if (!emailId || !password)
            throw new Error("Fields Missing");

        const user = await User.findOne({emailId});

        const match = await bcrypt.compare(password , user.password)

        if(!match)
            throw new Error(" Invalid Credentials");

        const token = jwt.sign({_id:user._id , emailId:user.emailId , role:user.role} , process.env.JWT_SECRET_KEY , {expiresIn:60*60});

        if(!token)
            throw new Error(" Token is missing")

        res.cookies("token" , token , {maxAge:60*60*1000});

        res.status(201).send("User LoggedIn Successfully");


    } catch (err) {
        res.status(500).send("Error Occured : " + err);
    }
}

const adminRegister = async (req , res) =>{
    try{

         const { firstName, emailId, password } = req.body;
        validate(req.body);

        if (!firstName || !emailId || !password)
            throw new Error("Fields Missing");

        req.body.password = bcrypt.hash(password, 10);

        const user = await User.create(req.body);

        req.body.role = "admin";

        const token = jwt.sign({ _id: user._id, emailId: user.emailId, role:user.role }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 });


          if(!token)
            throw new Error(" Token is missing")

        res.cookies("token ", token, { maxAge: 60 * 60 * 1000 });

        res.status(201).send("Admin Registered Successfully");


    }catch(err){
        res.status(500).send("Error Occured" + err);
    }
}


const logout = async (req , res) =>{
    try{ 
        const {token}  = req.cookies;

        if(!token)
            throw new Error(" Token is Missing");

        await redisClient.set(`token:${token}` , "Blocked");

        const payload = jwt.decode(token);

        if(!payload)
            throw new Error("Token is Missing");

        await redisClient.expireAt(`token:${token}` , payload.exp);

        res.cookie("token" ,null , {expires:new Date(Date.now())});
        
        res.status(200).send("User Logged Out Successfully");
        
        
    }catch(err){
        res.status(403).send("Error Occured " + err)
    }
}



module.exports = { register , login , logout , adminRegister }