const express=require('express');
require('dotenv').config();
const path=require('path');
const {router}=require('./Routes/url');
const {userRouter}=require('./Routes/user');
const {connectToDB}=require("./connection/connect");
const staticRoute=require('./Routes/staticRouter');
const app=express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const { onlyToLoggedUser } = require('./middleware/auth');

const PORT=process.env.PORT||8001;
connectToDB(process.env.mongo_URL)
 .then(()=>console.log(`Server started at PORT ${PORT}`))
 .catch((err)=>console.log(err));
 
 
 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/url',onlyToLoggedUser,router);
app.use('/',staticRoute);
 app.use('/user',userRouter);

app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));


app.listen(PORT,()=>console.log(`Server started at ${PORT}`));

