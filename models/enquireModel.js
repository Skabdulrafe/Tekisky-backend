import mongoose from "mongoose"
const enquirySchema = new mongoose.Schema({
  shopSellerName: {
    type: String,
    required: true
  },
  doYouHaveGST: {
    type: Boolean,
    required: true
  },
  GST: {
    type: String,
    required: function() { return this.doYouHaveGST; }  // GST is required if the seller has GST
  },
  doYouHaveShop: {
    type: Boolean,
    required: true
  },
  shopName: {
    type: String,
    required: function() { return this.doYouHaveShop; }  // Shop name is required if the seller has a shop
  },
  productDetails: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique:true
  },
  whichProductYouHaveToSell: {
    type: String,
    required: true
  }
});

const enquirymodel = mongoose.model('enquiry', enquirySchema);

export default  enquirymodel
