const mongoose = require("mongoose");

async function connectToDB(url){
    mongoose.connect(url).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log(err));
    
}
module.exports={
    connectToDB,
}