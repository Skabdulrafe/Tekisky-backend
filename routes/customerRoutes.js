import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  Address: {
    type: String,
    required: true
  }
});

const CustomerModel = mongoose.model('Customer', customerSchema);

export default CustomerModel;
