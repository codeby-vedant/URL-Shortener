const express=require('express');
const path=require('path');
const {router}=require('./Routes/url');
const {userRouter}=require('./Routes/user');
const {connectToDB}=require("./connection/connect");
const staticRoute=require('./Routes/staticRouter');
const app=express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const { onlyToLoggedUser } = require('./middleware/auth');

const PORT=8001;
connectToDB("mongodb://localhost:27017/url-shortener");
 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/url',onlyToLoggedUser,router);
app.use('/',staticRoute);
 app.use('/user',userRouter);

app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));


app.listen(PORT,()=>console.log(`Server started at ${PORT}`));

