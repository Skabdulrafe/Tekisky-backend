
import { createProductservices, Deleteservices, getoneProductServices, getProductServices, updatedProductservices } from "../services/productServices.js";

export let addProduct = async (req, res) => {
    let productDetails = req.body;
  try {
        let status = await createProductservices(productDetails);
        if (status == "success") {
            return res.status(201).send(`product created successfully with productid ${productDetails}`); 
        } else {
            return res.status(400).send('error: product creation failed');
        }
     }catch (error) {
        return res.status(500).send("error occurred"); 
    }}

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

