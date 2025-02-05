import express from "express";
import upload from "../multer/multer.js"; // Import multer config

const uploderouter = express.Router();

// Upload a Single Image
uploderouter.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No image uploaded!" });
    }
    res.status(200).json({
        message: "Image uploaded successfully!",
        imageUrl: `/uploads/${req.file.filename}`
    });
});

// Upload Multiple Images
uploderouter.post("/upload/multiple", upload.array("images", 5), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "No images uploaded!" });
    }
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    res.status(200).json({
        message: "Images uploaded successfully!",
        imageUrls: imageUrls
    });
});

export default uploderouter;
