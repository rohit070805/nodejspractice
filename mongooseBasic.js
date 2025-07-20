
const mongoose = require('mongoose');
// Mongoose is advancement of mongo db here we can specify schema and model 
// and apply resitriction of field and type of data entered
// schema is structure of data set
// Model connects that schema and mongodb with node

mongoose.connect("mongodb://localhost:27017/mongotut");
// Yaha link ke sath databse ka name specify krna hai
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    type: String
});

// Create
const saveinDB = async () => {
  const productModel = mongoose.models.ecommerce|| mongoose.model('ecommerce', productSchema, 'ecommerce');
    // yha collection ka nam or schema specify krna hai.
    // mongoose.models.ecommerce is used to check if already created iske bina ye 2 entry ek sath krega
    // yaha mongoose.model('ecommerce',productSchema) ye bhi correct tha pr mongoose collection 
    // name ko hmesha pluralise or lowercase kr deta hai automaticlly tp agr aapka collection name 
    // lowercased or pluralised nahi hai to usko schema ke bad specify krdo 
    // us se vo smjh jayega ki yhi name rkhna hai vrna nya bna dega
    let data = new productModel({
        name: "t4 ultra",
        brand: "realme",
        type: "smartphone"
    });
    // agar yha koi or data name ke alava dalne ki koshish krenge to vo database me save nhi hoga
    let result = await data.save();
    console.log(result);

}
// update
const updateDB = async()=>{
    const productModel = mongoose.models.ecommerce|| mongoose.model('ecommerce', productSchema,'ecommerce');
    let data = await productModel.updateOne({name:"t4 ultra"},{$set:{brand:"Vivo"}});
    console.log(data);
}
// Delete
const deleteinDB =async ()=>{
     const productModel = mongoose.models.ecommerce|| mongoose.model('ecommerce', productSchema,'ecommerce');
     let data = await productModel.deleteOne({brand:"realme"});
     console.log(data);
}

// Read
const findDB = async()=>{
    const productModel = mongoose.models.ecommerce|| mongoose.model('ecommerce', productSchema,'ecommerce');
    let data = await productModel.find();
    let data2 = await productModel.find({brand:"realme"});
    console.log(data);
    console.log(data2);
}
findDB();