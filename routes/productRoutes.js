import express from "express"
import { addProduct, deleteProduct,getOneproduct,getproduct,updateProduct } from "../controller/productController.js"
import upload from '../multer/multer.js'; 
import authenticateToken from "../autharization/jwtuser.js";
let productd=express.Router()
productd.post('/addproduct',authenticateToken,addProduct)
// productd.post('/upload',authenticateToken,upload)
productd.get('/getproduct',getproduct) 
productd.get('/getoneproduct/:id',authenticateToken,getOneproduct) 
productd.put('/update/:id',authenticateToken,updateProduct)
productd.get('/delete/:id',authenticateToken,deleteProduct)
export default productd