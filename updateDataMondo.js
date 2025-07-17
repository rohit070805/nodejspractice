const { name } = require('ejs');
const dbconnection = require('./mongodb')

const updatedata  = async ()=>{
    let resp = await dbconnection();
    let result = await resp.updateOne({name:"s24 ulta"},{$set:{name:"s24 ultra"}}
    );
    // UpdateMany can also be used
    console.log(result);
    // yaha je ye result aayega vo is type ka hoga:
    //   acknowledged: true,
    //   modifiedCount: 1,
    //   upsertedId: null,
    //   upsertedCount: 0,
    //   matchedCount: 1
    // to acknowledged to hmesha true aayega agr command sahi se run hui chahe updatebhi na hua ho 
    // agr pata krna ai ki update hua ya nhi to matched or modified count ko dekho
   if(result.acknowledged) console.warn("Data Updated");
}
updatedata();