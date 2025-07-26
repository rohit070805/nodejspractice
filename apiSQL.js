const express= require('express');
const con = require('./connectionwithSql');
const app = express();
app.use(express.json());
app.get('/',(req,resp)=>{
    con.query("Select * from users",(err,result)=>{
        if(err){
            resp.send("error");
        }
        else{
            resp.send(result);
        }
    })
})

app.post('/',(req,resp)=>{
    // const data = {name:"Rohit",user_type:"super_duper",password:"1234"};
    const data  = req.body;
    con.query("Insert into users set ?",data,(err,result)=>{
        if(err){
            resp.send(error);
        }
        else{
            resp.send(result);
        }
    })

})

app.put('/:id',(req,resp)=>{

const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
con.query("UPDATE users SET name = ?,password = ?,user_type=? where id = ?",data,(err,result)=>{
     if(err){
            resp.send(error);
        }
        else{
            resp.send(result);
        }
})
});

app.delete("/:id",(req,resp)=>{
con.query("delete from users where id ="+req.params.id,(err,result)=>{
    if(err){
            resp.send(error);
        }
        else{
            resp.send(result);
        }
})
});
app.listen(5000);