import  express  from "express";
import 'dotenv/config'
import userController from './controllers/userscontroller'
import adminController from './controllers/admin'
import candidatesController from './controllers/candidates'
import votesController from './controllers/votes'
import { conectToMongo } from "./config/db";

const app = express()
const PORT = process.env.PORT || 3000

conectToMongo()

app.use(express.json())
app.use("/api/users",userController)
app.use('/api/admin',adminController)
app.use('/api/votes',votesController)
app.use("/api/candidates", candidatesController);

app.listen(PORT,()=>{
    console.log(`the server running on port ${PORT}`)    
})