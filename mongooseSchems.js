const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/mongotut");
const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    category:String
})

module.exports= mongoose.models.ecommerce|| mongoose.model('ecommerce', productSchema, 'ecommerce');