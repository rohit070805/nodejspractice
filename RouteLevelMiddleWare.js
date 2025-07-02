const express = require('express');
const app = express();
const route1 = express.Router();
const route2 = express.Router();

const reqFilter1 = (req,resp,next)=>{
    if(!req.query.age) resp.send("Enter your age please");
    else if(req.query.age<18) resp.send("You are not eligible");
    else next();
}

const reqFilter2 = (req,resp,next)=>{
    if(!req.query.age) resp.send("Enter your age please");
    else if(req.query.age>18) resp.send("You are not eligible");
    else next();
}

route1.use(reqFilter1);
route2.use(reqFilter2)

app.get('/',(req,resp)=>{
    resp.send("Welcome to the home page");
})

route1.get('/login',(req,resp)=>{
    resp.send("Welcome to the login page");
})
route2.get('/about',(req,resp)=>{
    resp.send("Welcome to the about page");
})
app.use('/user',route1);
app.use('/info',route2);
// Links Will be:
// if we are using 2 different reqFilter,if only one middle ware then no need to add info or user.
// http://localhost:4000/info/about/?age=20
// http://localhost:4000/user/login/?age=19

// or we can use: directly no need to define route then
// app.get('/',reqFilter1,(req,resp)=>{
//     resp.send("Welcome to the home page");
// })

// app.get('/login',reqFilter2,(req,resp)=>{
//     resp.send("Welcome to the login page");
// })
app.listen(4000);