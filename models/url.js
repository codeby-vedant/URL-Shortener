const mongoose=require('mongoose');
const URLSchema= new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectedURL:{
         type:String,
         required:true,
    },
    visitHistory:[{timestamp:Number}]
},{
  timestamps:true
}
)
const modelURL=mongoose.model('url',URLSchema);
module.exports=modelURL;
