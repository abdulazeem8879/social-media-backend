import express from "express"
import { registerController } from "../controllers/userControllers.js"

const userRoute=express.Router()

userRoute.post("/create",registerController)



export default userRoute