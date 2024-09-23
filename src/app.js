import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true // it allow browser to send details credentail details

}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended:true , limit:"16kb"})) 
/* 
 urlencoded is use to specify server that data will also come from url and convert that
 in normal form url to js eg-> %40 is @

{
  user: {
    name: 'John Doe',
    age: '30',
    hobbies: ['reading', 'traveling', 'sports']
  }
}
 here extented is used
 url eg: https://example.com/submit?user[name]=John%20Doe&user[age]=30&user[hobbies][]=reading&user[hobbies][]=traveling&user[hobbies][]=sports
*/
app.use(express.static("public"))
// it means it use by client to put in  public by user

app.unsubscribe(cookieParser())

export { app }