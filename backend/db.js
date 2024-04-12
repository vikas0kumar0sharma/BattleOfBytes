// require('dotenv').config({ override: true })
import mongoose from "mongoose"

const mongoURI='mongodb+srv://svikaskumar23:pyaravicky111@cluster0.imo3ugs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoDb=async()=>{
  console.log()
  try {
    await mongoose.connect(mongoURI)
    console.log('database connected successfully')
  } catch (error) {
    console.log('there is some error in connecting databse',error)
  }
}

export default mongoDb