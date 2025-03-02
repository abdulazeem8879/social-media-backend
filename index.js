import express from "express"
import dotenv, { configDotenv } from "dotenv"
import userRoute from "./routes/userRoute.js"
import dbConnect from "./database/dbConnect.js"

configDotenv()
let port=process.env.PORT || 6000
let dbName=process.env.DBNAME
let dbUrl=process.env.DBURL

const app=express()
app.use(express.json())
dbConnect(dbUrl,dbName)

app.use("/user",userRoute)

app.listen(port,()=>{
console.log(`server start at http://localhost:${3000}`)
})