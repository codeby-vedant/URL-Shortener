const mongoose = require("mongoose");

async function connectToDB(url){
    try{
   await mongoose.connect(url);
   console.log("MongoDB connected");
   
    }catch(err){
        console.log("MongoDB not connected Succesfully");
        throw err;
        
    }
    
}
module.exports={
    connectToDB,
}