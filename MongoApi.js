const express = require('express');
const dbconnection = require('./mongodb');
const app = express();
app.use(express.json());
// Get api me kabhi bhi body pass nhi kr skte.
// jab direct kholenge to yhi wali khulegi localhost:4000
app.get('/', async (req,resp) =>{
    let result = await dbconnection();
    let data = await result.find().toArray();
    resp.send(data);

});

app.post('/',async (req,resp)=>{
//    yaha postman se data dal rhe hai or vha post select krke jab ye url dalenge 
//    to ye response vhi show ho jayega or mongo db me data insert ho jayegs
    let data = await dbconnection();
    let result = await data.insertMany(req.body);
    resp.send(result);

})

// put api
// ye :name tabhi likhna hai jab req params se condition bhej rhe hao.
app.put('/:name',async (req,resp)=>{
    let data = await dbconnection();
    // ye tab use krenge jab jo change krna hai vo link ke through bhej rhe ho i.e req params
     let result = await data.updateMany({name:req.params.name},{$set:req.body});
    //  ye tab use krenge jab jo change krna hai vo staticlyy likha ho or new data req.body i.e postman se bhej rhe ho
    // let result = await data.updateOne({name:"ROhit"},{$set:req.body});
    resp.send(result);
    console.log(req.body);
})

// Delete Api
// same update wale concept hi isi me honge
app.delete('/:name',async (req,resp)=>{
    let data = await dbconnection();
    let result = await data.deleteMany({name:req.params.name});
    resp.send(result);
    console.log(result)
})    
app.listen(4000);


// jab chrome me localhost:5000 khol rhe hai to sirf app.get ko hi target krta hia 
// vo to usi ka respobse aarha but postman me hum select kr skte ki kise target krwana hai