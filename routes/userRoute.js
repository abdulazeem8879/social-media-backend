import express from "express"
import { loginUserController, registerController } from "../controllers/userControllers.js"

const userRoute=express.Router()

userRoute.post("/register",registerController)
userRoute.get("/login",loginUserController)



export default userRoute