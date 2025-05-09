const mongoose = require("mongoose");

const database = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
    }catch(err){
        console.log(
            "Error Occured " +err 
        );
    }
}

module.exports  = database;