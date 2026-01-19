 const shortid= require("shortid");
 const modelURL=require("../models/url");

 async function generateShortId(req,res){
    const body=req.body;
   //  if(!body.url) return res.status(400).json({Msg:"url is required"});
     if(!body.url) return res.render('home');
      const shortId=shortid.generate();
      await modelURL.create({
        shortId:shortId,
        visitHistory:[],
        redirectedURL:body.url,
      })
        
     return res.render("home",{
      id:shortId,
     }) ;
   // return res.status(201).json(`http://localhost:8001/${shortId}`);

 }
 async function handleGetShortURL(req,res){
      const shortId=req.params.id;
      try{
     const entry=await modelURL.findOneAndUpdate({
        shortId
     },{
        $push:{
            visitHistory:{timestamp:Date.now()},
        }

     }
    )
    if(!entry) return res.status(404).json({msg:"NOT FOUND"});
    return res.redirect(entry.redirectedURL);
   }catch(err){
      console.log(err);
      return res.status(500).json({msg:"Server side error"});
      
   }
    


 }
 async function visitHistory(req,res){
      const shortId=req.params.id;
      const entry= await modelURL.findOne({shortId});
      return res.json({
        TotalClicks:entry.visitHistory.length,
        History:entry.visitHistory,
    });



 }
 
 module.exports={
    generateShortId,
    handleGetShortURL,
    visitHistory,
    
 }