
import { getDataUri } from "../utils/features.js";
import { v2 as cloudinary } from "cloudinary";
import { createProductservices, Deleteservices, getoneProductServices, getProductServices, updatedProductservices } from "../services/productServices.js";

export let addProduct = async (req,res) => {
    // let productDetails = req.body;
    // let rafef=req.files
    // if(req.file){
    //     console.log("file visible")
    // }
//   try {
//     // if (!req.file) {
//     //     return res.status(500).send({
//     //       success: false,
//     //       message: "please provide product images",
//     //     });
//     //   }
  
//         let status = await createProductservices(productDetails,rafef);
//         if (status == "success") {
//             return res.status(201).send(`product created successfully with productid ${productDetails}`); 
//         } else {
//             return res.status(400).send('error: product creation failed');
//         }
//      }catch (error) {
//         return res.status(500).send("error occurred"); 
//     }
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



export let getproduct = async (req, res) => {
    try {
        let status = await getProductServices();
        if (status) {
            return res.status(201).send(status);
        } else {
            return res.status(400).send('error: failed to fetch product');


        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};
export let getOneproduct  = async (req, res) => {
    try {
        let productId= req.params.id
        let status = await getoneProductServices(productId);
        // if (status == "success") {
        //     return res.status(201).send('product read successfully');
        // } else {
        //     return res.status(400).send('error: failed to fetch product');
        // }
        res.status(201).send(status)
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};

 export let updateProduct=async(req,res)=>{
    let productId= req.params.id
    let productDetails=req.body
  try {
    let status = await updatedProductservices(productId,productDetails);
    if (status == "success") {
        return res.status(201).send(`product updated successfully`); 
    } else {
        return res.status(400).send('error: product update failed');
    }
} 

catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
} 
export let deleteProduct=async(req,res)=>{
    let productId= req.params.id
    let productDetails=req.body
  try {
    let status = await Deleteservices(productId,productDetails);
    if (status == "success") {
        return res.status(201).send(`product delted successfully`); 
    } else {
        return res.status(400).send('error: product deleted failed');
    } }
 catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
}

