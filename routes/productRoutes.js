import express from "express"
import { addProduct, deleteProduct,getOneproduct,getproduct,updateProduct } from "../controller/productController.js"
// import   multipleUpload  from '../multer/upload.js'; 
import authenticateToken from "../autharization/jwtuser.js";
let productd=express.Router()
productd.post('/addproduct',addProduct)
productd.get('/getproduct',getproduct) 
productd.get('/getoneproduct/:id',getOneproduct) 
productd.put('/update/:id', authenticateToken,updateProduct)
productd.get('/delete/:id',authenticateToken,deleteProduct)
export default productd