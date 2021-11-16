import mongoose from "mongoose";
import UserModel from './models/User'
import { config } from './config/config'

const mongoSetup = async () => {
   const dbOptions: mongoose.ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
   };
   
   console.log(`mongodb://root:123456@${config.HOST}:${config.PORT}/${config.SCHEMA}`);
   
   await mongoose.connect(`mongodb://root:123456@${config.HOST}:${config.PORT}/${config.SCHEMA}?authSource=admin`, dbOptions).then(resp =>{
      console.log("Mongodb Connection stablished");
      
   }).catch(err => {
      console.log("Mongodb connection error:", err);
      process.exit();
   })

   return { User: UserModel }
}
export default mongoSetup