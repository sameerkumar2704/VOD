import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';
import {app} from '../app.js'

const connnectDB =  async ()=> {
    try{
       const mongoDBConnetionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected DB HOST : ${mongoDBConnetionInstance.connection.host}`)
    } catch(error){
        console.log("MogoDB Connection Error 🍀: " , error)
        process.exit(1)
    }
}

export {connnectDB}