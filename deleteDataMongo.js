const { name } = require('ejs');
const dbconnection = require('./mongodb')

const deletedata  = async ()=>{
    let resp = await dbconnection();
    let result = await resp.deleteMany({name:"s24 ulta"});
    console.log(result);
    // DeleteOne can also be used to delete first one
    // yaha je ye result aayega vo is type ka hoga:
    //  { acknowledged: true, deletedCount: 1 }
    // to acknowledged to hmesha true aayega agr command sahi se run hui chahe delete hi na hua ho 
    // agr pata krna ai ki update hua ya nhi to deletedcount ko dekho
   if(result.acknowledged) console.warn("Data deleted");
}
deletedata();