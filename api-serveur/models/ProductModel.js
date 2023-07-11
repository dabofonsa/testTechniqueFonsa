import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    _id: Number,
    name: String,
    type:String,
    price:Number,
    rating: Number,
    warranty_years:Number,
    available: String
});

const ProductModel = mongoose.model('Products', productSchema);

export default ProductModel;