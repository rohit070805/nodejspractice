const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='mongotut'
const client= new MongoClient(url);

async function dbconnection()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('ecommerce');
  


}
module.exports= dbconnection;