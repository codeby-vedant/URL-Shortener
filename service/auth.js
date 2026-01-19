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
const secret="Vedant123@$";
function setUser(user){
   return jwt.sign({
     id:user.id,
     email:user.email,
   },secret);
}
function getUser(token){
   if(!token) return null;
   return jwt.verify(token,secret);
}
module.exports={
    setUser,
    getUser
 }

