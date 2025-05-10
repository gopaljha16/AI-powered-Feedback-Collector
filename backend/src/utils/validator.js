
const validator = require("validator")

const validate = async (data) =>{
     const mandatoryFields = ["firstName" ,"emailId" , "password"];
     
     const isAllowed = mandatoryFields.every((k) => Object.keys(data).includes(k));

     if(!isAllowed)
        return res.status(404).send("Fields Missing");

     if(!validator.isEmail(data.emailId))
        return res.status(403).send("Email is invalid");

     if(!validator.isStrongPassword(data.password))
        return res.status(404).send("Weak Password");

     if(data.firstName < 3 && data.firstName > 25)
        return res.status(403).send("firstname is out of context");
}

module.exports = validate