const dbconnection = require('./mongodb')

const insertdata  = async ()=>{
    let resp = await dbconnection();
    let result = await resp.insertMany(
        [
            {name:"14 pro",brand:"apple",type:"imobile"},
            {name:"13 pro",brand:"apple",type:"imobile"},
            {name:"s24 ulta",brand:"samsung",type:"flagship"}
        ]
    );
    console.log(result);
    /*yha resule me ye sab aayega:
    acknowledged: true,
    insertedCount: 3,
    insertedIds: {
        '0': new ObjectId('6878d2c40f5a224f417bc0d9'),
        '1': new ObjectId('6878d2c40f5a224f417bc0da'),
        '2': new ObjectId('6878d2c40f5a224f417bc0db')
    }
    }*/
   if(result.acknowledged) console.warn("Data Inserted");
}
insertdata();