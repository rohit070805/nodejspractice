const express = require('express');
const app = express();
const reqFilter = (req,resp,next)=>{
    if(!req.query.age) resp.send("Enter your age please");
    else if(req.query.age<18) resp.send("You are not eligible");
    else next();
}
app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send("Welcome to the home page");
})

app.get('/login',(req,resp)=>{
    resp.send("Welcome to the login page");
})
app.listen(4000);