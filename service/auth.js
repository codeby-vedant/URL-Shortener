require('dotenv').config();

//statefull
// const sessionIdtoUser= new Map();
//   function setUser(id,user){
//     sessionIdtoUser.set(id,user);
//  }
//  function getUser(id){
//      return sessionIdtoUser.get(id)
//  }

//  module.exports={
//     setUser,
//     getUser
//  }

//stateless
const jwt=require('jsonwebtoken');
const secret=process.env.secret_Key;
function setUser(user){
   return jwt.sign({
     id:user.id,
     email:user.email,
   },secret,{
      expiresIn:"10m"
   });
}
function getUser(token){
   try{
   if(!token) return null;
   return jwt.verify(token,secret);
}catch(err){
   console.log(err);
   
   return null;
}
}
module.exports={
    setUser,
    getUser
 }

