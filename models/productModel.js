import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productId: { type: String, unique: true, required: true },  // Unique product ID
    header: { type: String, required: true },
    productCategory: { type: String, required: true },
    otherCategory: { type: String },
    productName: { type: String, required: true },
    productType: { type: String },
    productBrand: { type: String },
    availableStockQty: { type: Number, required: true },
    mrp: { type: Number, required: true },
    offerPrice: { type: Number },
    packetweight: { type: Number },
    unitOfMeasure: { type: String, required: true },
    description: { type: String },
    createdBy: { type: String, required: true },
     imageURL: { type: [String] },  // Array of image URLs
    manufactureDate: { type: String },
    expiryDate: { type: String },
    sellerInformation: { type: String },
    approved: { type: Boolean, default: false },
    dealOfDay: { type: Boolean, default: false },
    tekiskyPrice: { type: String },
    size: { type: String },
    color: { type: String },
    material: { type: String }
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);

export default productModel
