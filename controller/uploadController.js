export const uploadImages = async (req, res) => {
    try {
      console.log("Files Received:", req.files); // Debugging log
  
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: "No images uploaded" });
      }
  
      let uploadedImages = [];
  
      for (const file of req.files) {
        console.log("Processing File:", file); // Debugging log
        if (!file || !file.buffer) {
          console.log("File buffer is missing:", file);
          continue; // Skip this file if buffer is missing
        }
  
        // Convert file to Data URI
        const fileUri = getDataUri(file);
        console.log("Generated Data URI:", fileUri); // Debugging log
  
        // Upload to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(fileUri.content, {
          folder: "uploads",
        });
  
        uploadedImages.push({
          public_id: uploadResponse.public_id,
          url: uploadResponse.secure_url,
        });
      }
  
      res.status(201).json({ success: true, message: "Images uploaded", images: uploadedImages });
    } catch (error) {
      console.error("Upload Error:", error);
      res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
  };
  