// Express Js ek frame Work hai node js ka
// jaise xml ke liye JetPack hota
// less code more work
// Use "npm install express"

const express = require("express")
const app = express();
// app.get("route",(req,res)=>{})
app.get('',(req,res)=>{
          res.send("Hello,this is home page")
})

app.get("/about",(req,res)=>{
    res.send("Hello,this is about page")
})

app.listen(5000);