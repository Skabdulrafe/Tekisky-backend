// import showimg from "../models/imagesModel.js";
import { createProductservices } from "../services/productServices.js";
import { getDataUri } from "../utils/features.js";
import { v2 as cloudinary } from "cloudinary";

export const uploadImages = async (req, res) => {
  try {
    const jsonData = JSON.parse(req.body.json_data)
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    let uploadedImages = [];
    for (const file of req.files) {
      // console.log("Processing File:", file);

      if (!file || !file.buffer) {
        console.log("File buffer is missing:", file);
        continue; // Skip this file if buffer is missing
      }

      // Convert file to Data URI
      const fileUri = getDataUri(file);

      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(fileUri.content, {
        folder: "uploads",
      });

      // Save to MongoDB
      // const savedImage = await showimg.create({
      //   public_id: uploadResponse.public_id,
      //   url: uploadResponse.secure_url,
      // });
      // const savedImage = {
      //   public_id: uploadResponse.public_id,
      //   url: uploadResponse.secure_url,
      // };
      // uploadedImages.push(savedImage);
      const savedImage =uploadResponse.secure_url
      ;
      uploadedImages.push(savedImage);
    }
    jsonData.imageURL=uploadedImages
 console.log(jsonData.imageURL)
 console.log(jsonData)

    // res.status(201).json({
    //   success: true,
    //   message: "Images uploaded and saved successfully",
    //   images: uploadedImages,
    // });
    let status = await createProductservices(jsonData);
        if (status == "success") {
            return res.status(201).send(`product created successfully with productid`); 
        } else {
            return res.status(400).send('error: product creation failed');
        }
     }catch (error) {
        return res.status(500).send(error); 
    }
  // } catch (error) {
  //   console.error("Upload Error:", error);
  //   res.status(500).json({ success: false, message: "Server Error", error: error.message });
  // }
};
