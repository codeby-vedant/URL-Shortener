const{generateShortId,handleGetShortURL,visitHistory,createUser}=require('../Controller/url');
const express=require('express');
const router=express.Router();
router.get("/:id",handleGetShortURL);
router.post('/',generateShortId);
router.get("/analytics/:id",visitHistory);

module.exports={
    router,
}


