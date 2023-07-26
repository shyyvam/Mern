const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controllers/productController");

const router = express.Router();

//Product Routes
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails); //Because they will have the same urls with differenet types



module.exports = router;