const dbconnection = require('./mongodb')
// dbconnection().then((resp)=>{
//         resp.find().toArray().then((data)=>{
//             console.log(data);
//         })
// })

const main = async ()=>{
   let resp = await dbconnection();
   let data =await resp.find().toArray();
   console.warn(data);
} 
main();