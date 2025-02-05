import express from "express"
import { acceptenquiry,getenquiry } from "../controller/enquiryController.js"
import authenticateToken from "../autharization/jwtuser.js"
const enquiryRoute = express.Router()
enquiryRoute.post('/enquiry', authenticateToken, acceptenquiry)
enquiryRoute.get('/getenquiry', authenticateToken, getenquiry)
export default enquiryRoute