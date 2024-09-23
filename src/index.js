import dotenv from 'dotenv'
import './db/connect_to_db.js'
import { connnectDB } from './db/connect_to_db.js'
import { app } from './app.js'

dotenv.config({path:"./env"})
app.on("errror" , (err)=>{
    console.log("ERRR: " , err)
})
connnectDB().then(
    ()=>{
        app.listen(process.env.PORT , ()=>{
            console.log(`Server running at port ${process.env.PORT}`)
        })
       
    }
).catch((err)=>{
    console.log("MONGO DB Connection Failed !!! " , err)
})