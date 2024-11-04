import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


const router = express.Router();

router.get("/", getProducts);  //  route to fetch products
router.post("/", createProduct);     //  route to add new product
router.put("/:id", updateProduct);     //  route to modify/update products by ID
router.delete("/:id", deleteProduct);     //  route to delete product by ID

export default router;
