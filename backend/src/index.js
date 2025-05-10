require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const redisClient = require("./config/redis")
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/userRoute")
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user" , authRouter);


const initalConnection = async () =>{
    try{

        Promise.all([redisClient.connect() , database()]);
        console.log("Databases are Connected");

        app.listen(process.env.PORT_NO , () =>{
            console.log(`Server is Listening on port no ${PORT_NO}`)
        })

    }catch(err){
        console.log("Error Occured " + err);
    }
}

initalConnection();