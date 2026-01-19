const {User}=require('../models/user');
const {v4:uuidv4}= require('uuid');
const { setUser } = require('../service/auth');

async function createUser(req,res){
     const body=req.body;
     if(!body.name||!body.email||!body.password)
        return res.redirect('/signup');
   await  User.create({
       name:body.name,
       email: body.email,
       password: body.password
    });
    return res.redirect('/');  
}

async function checkLoggedIn(req,res){
      const body=req.body;
     if(!body.email||!body.password)
        return res.redirect('/login',{ msg:'All credential are required'}); 
    const loggedUser=await User.findOne({email:body.email,password:body.password});
    if(!loggedUser)  return res.redirect('/login',{ msg:'Invalid Credentails'});  
    // const sessionId=uuidv4();
    // setUser(sessionId,loggedUser);
    // res.cookie('uid',sessionId);
    const token=setUser(loggedUser);
    res.cookie("uid",token);

    
    return res.redirect('/');
}
module.exports={
    createUser,
    checkLoggedIn
}
