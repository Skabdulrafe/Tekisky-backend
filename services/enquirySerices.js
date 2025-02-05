import enquirymodel from "../models/enquireModel.js"
 export let enquiryser=async(data)=>{
    try{
    let shouldsave=new enquirymodel(data)
    let result= await shouldsave.save()
return "success"
}
    catch(error){
        console.log(error)
    }

 }
 export let findenquiry=async()=>{
let data= await enquirymodel.findOne()
return data
 }
 