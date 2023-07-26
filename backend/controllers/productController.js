const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//Create Product --ADMIN
exports.createProduct = catchAsyncErrors(async(req,res,nextf)=>{    //To catch async errors in the and resolve the error          
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});

//Get All Products --PUBLIC
exports.getAllProducts = catchAsyncErrors(async(req,res) => {
    const apiFeatures = new ApiFeatures(Product.find(),req.query);
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
});

//Get Product Details 
exports.getProductDetails = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success:true,
        product
    })
});

//Update Product --ADMIN
exports.updateProduct = catchAsyncErrors(async(req,res,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,           //Return the update object if set true
        runValidators:true, //Check for validations in the product Model
        useFindAndModify:false//Use the latest useFindOneAndModify function
    })

    res.status(200).json({
        success:true,
        product
    })
});

//Delete Product --Admin
exports.deleteProduct = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success:true,
        message:"Product deleted succesfully"
    })
});





