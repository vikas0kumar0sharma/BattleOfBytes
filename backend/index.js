import express from "express"
const app=express()
const PORT=5000
import cors from "cors"
import bodyParser from "body-parser"
import mongoDb  from "./db.js"
import createUserRouter from './Routes/CreateUser.js';

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/api/createUser',createUserRouter)

mongoDb()

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))