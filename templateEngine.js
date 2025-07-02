const express = require('express');
const app = express();
app.set('view Engine', 'ejs');
app.get('/public',(req,resp)=>{
    const user= {name:"Rohit",email:"Rohit@gmail.com"}
    resp.render('public.ejs',{user});
})
app.listen(4000);