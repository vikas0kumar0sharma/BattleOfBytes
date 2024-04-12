import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const UserSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  voted:{
    type:Boolean,
    required:true,
    default:false
  }
})

export default mongoose.model('user',UserSchema)