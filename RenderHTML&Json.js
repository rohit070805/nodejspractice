const express = require('express');
const app = express();

// Yaha HTML ka code
// <h1> <h1>
// Input Box
app.get("",(req,resp)=>{

    resp.send(`
        <h1>Welcome, to home Page </h1>
        <input type = "text" placeholder = "User Name" value= ${req.query.name} />
        <button>Click Me</button>
        <a href="/help"> Go to Help page</a>
        `)
}) 

// Rendering Json data
app.get("/help",(req,resp)=>{
    resp.send([
        {
            name:"Anil",
            email:"anil@gmail.com"
        },
        {
            name :"Rohit",
            email:"rohit@gmail.com"
        }
    ]
   

        

)
}) 
app.listen(4000);