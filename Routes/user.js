const express=require('express');
const {createUser,checkLoggedIn}=require('../Controller/user')
const userRouter=express.Router();
userRouter.post('/',createUser);
module.exports={
   userRouter,
}
userRouter.post('/login',checkLoggedIn);
module.exports={
   userRouter,
}
