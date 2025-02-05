
import { enquiryser, findenquiry } from "../services/enquirySerices.js"
export const acceptenquiry=async(req,res)=>{try{
    let data=req.body
    let { mobileNumber}=req.body
    let enquiry=await enquiryser(data)
    if (enquiry=="success"){
        res.json({"status":"success","message": "Enquiry accepted"}).status(201)
        console.log(data)
    }

    else{
        res.json({"status":"error"}).status(401)
    }
}
catch(error){
    console.log(error)
}
}
export const getenquiry=async(req,res)=>{

    try{

      //  res.send("data")
      let enquirydata=await findenquiry()
      res.send(enquirydata) 

}
    catch (error){
        console.log(error)
    }
}