import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
}, { timestamps: true });

 let showimg=mongoose.model("Image", ImageSchema);
 export default showimg
