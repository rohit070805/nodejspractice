const { name } = require('ejs');
const mongoose = require('mongoose');
const main  = async()=>{
    await mongoose.connect("mongodb://localhost:27017/mongotut");
    // Yaha link ke sath databse ka name specify krna hai
    const productSchema = await mongoose.Schema({
        name:String
    });
    const productModel = await mongoose.model('ecommerce',productSchema,'ecommerce');
    // yha collection ka nam or schema specify krna hai.
    // yaha mongoose.model('ecommerce',productSchema) ye bhi correct tha pr mongoose collection 
    // name ko hmesha pluralise or lowercase kr deta hai automaticlly tp agr aapka collection name 
    // lowercased or pluralised nahi hai to usko schema ke bad specify krdo 
    // us se vo smjh jayega ki yhi name rkhna hai vrna nya bna dega
    let data = new productModel({
        name:"t4 ultra"
    });
    let result =await data.save();
    console.log(result);

}
main();