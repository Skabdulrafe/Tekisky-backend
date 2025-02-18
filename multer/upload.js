import multer from "multer";
import path from "path";

// Multer configuration (temporary storage before uploading to Cloudinary)
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Temporary storage
    console.log(file)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB per file
}).array("images", 10); // Accept multiple files (max: 10)

export default upload;
