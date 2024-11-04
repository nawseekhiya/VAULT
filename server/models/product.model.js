import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true    // gives values of createdAt, updatedAt
});

const Product = mongoose.model('Product',productSchema);        //  creating a Product model

export default Product;