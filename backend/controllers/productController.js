const Product = require("../models/productModel");


//Create Product --ADMIN
exports.createProduct = async(req,res,nextf)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get All Products --PUBLIC
exports.getAllProducts = async(req,res) => {
    const products = await Product.find();
    
    res.status(200).json({
        success:true,
        products
    })
}

//Update Product --ADMIN
exports.updateProduct = async(req,res,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
}