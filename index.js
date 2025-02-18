import express from 'express'
const app=express();//create instance of express
import bodyParser from 'body-parser';
import dotenv from 'dotenv' 
import dbConnect from './dbconnection/dbconnection.js';
import enquiryRoute from './routes/enquiryRotues.js';
import orderRoute from './routes/orderRoutes.js';
import productd from './routes/productRoutes.js';
import userRout from './routes/userRoutes.js';
import preorderRouter from './routes/preorderroutes.js';
import upload from './multer/upload.js';
 import cors from 'cors';
// import uploderouter from './routes/uploadRoutes.js';
import cloudinary from "cloudinary";
// import uploderouter from './routes/uploderouter.js';
import router from './routes/uploderouter.js';

dotenv.config();//it loads 
app.use(cors())

let dbUrl = process.env.DBURL
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

let dbName = process.env.DBNAME
dbConnect(dbUrl, dbName);
app.use(bodyParser.urlencoded({extended:false}))//for url encoded data
app.use(express.json())//for parsing json data
app.use('/client',enquiryRoute)
app.use('/order',orderRoute)
app.use('/product',productd)
app.use('/user',userRout)
app.use('/pre',preorderRouter)
//app.use('/customer')
//app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api",router);
//console.log(upload.storage.DiskStorage)
app.listen(process.env.PORT,()=>{
    console.log(`the server statrted at http://localhost:${process.env.PORT} `);
})

