const express = require('express');
const app = express();
const Product = require('./mongooseSchems');

// ye alag se file isliye bnayi hai qki humlog kafi collections
//  ka use kr rhe ho skte hia to alg file bnake us collection 
// se connect krke direct yha ek variable ke through use kr skte hai
app.use(express.json());
app.post('/create',async (req,resp)=>{
    let data =new Product(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(result);
})
app.get('/get',async(req,resp)=>{
    let result = await Product.find();
    resp.send(result);
     console.log(result);
})
// jaise mongoApi me kiya tha wiase :name ka use krke reeq.params bhi use kr skte.
app.put('/update',async(req,resp)=>{
    let result = await Product.updateOne(req.body,{$set:{name:"note 8 ultra"}});
    resp.send(result);
    console.log(result);
})
app.delete('/delete',async(req,resp)=>{
    let result = await Product.deleteOne(req.body);
     resp.send(result);
    console.log(result);
})
app.listen(5000);