const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
 const app = express();
 const cookieparser = require('cookie-parser');
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieparser());
 const userModel = require('./models/userModel');
const { redirect } = require('express/lib/response');

 app.get('/',async(req,res)=>{
     const data = await userModel.find();
   res.send(data);
 })


 app.get('/logout',(req,res)=>{
   res.cookie("token","");
   res.redirect('/');
 })

 app.post('/create',(req,res)=>{
   let {username,email,password,age} = req.body;
   bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(password,salt,async (err,hash)=>{
          let user = await userModel.create({
      username,
      email,
      password:hash,
      age
   })
   let token = jwt.sign({email},"secretKey");
   res.cookie("token",token);
   res.send(user);

  
   
      })
   })
 
 })

 app.post('/login',async (req,res)=>{
   let user = await userModel.findOne({email:req.body.email});
   if(!user) res.send("Something went wrong");
   bcrypt.compare(req.body.password,user.password,(err,result)=>{
      if(!result) {
         res.send("Something Went Wrong");
      }
      else{
         let token = jwt.sign({email:user.email},"secretKey");
   
         res.cookie("token",token);
         res.redirect('/');
      }
   })
 })

 app.listen(3000);