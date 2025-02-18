import express from "express";
// import  {uploadImages} from "../controllers/uploadController.js";
import upload from "../multer/upload.js";
import { uploadImages } from "../controller/uploadController.js";
// import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/upload-multiple",upload,uploadImages);

export default router;
