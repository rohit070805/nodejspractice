// Client Request krta hai {browser},jo link bhejte vo request hi hoti
// Server Response deti hai {node of our pc}
// by default agr koi req pass nhi kri to jo response de rkha hoga vo bhej dega
const express = require("express");
const app = express();

// Request is:-
// http://localhost:4000/?name=Rohit 
// in which req.query.name = Rohit
app.get("",(req,res)=>{
    const requestName = req.query.name
    console.log("data sent by browser ==>>",requestName)
    res.send("Welcome Home" + requestName)
})
app.listen(4000);