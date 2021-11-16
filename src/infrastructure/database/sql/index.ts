/***** Sequelize service ******/
import { Sequelize } from 'sequelize'
import * as config from './config/'

// Models
import UserModel from './models/UserModel'
import ProductModel  from './models/Product'

// Seeders
import mainSeeder from './seeders/'
require('dotenv').config({path: '.env'})
export default async() => {
   /***************
      Declare config variables to database
   ***************/
   try {
      const sequelize = new Sequelize("challenge_db", "root", "123456", {
         host: "localhost",
         dialect: "mysql",
         port: 3307,
      })
      const User = UserModel(sequelize)
      const Product = ProductModel(sequelize)
      
      User.hasMany(Product)
      Product.belongsTo(User)

      const parentModels = {
         Product,
         User,
      }
      
      await sequelize.authenticate()
      await sequelize.sync({ force: true })
      await mainSeeder(parentModels)
      

      return { ...parentModels }
   } catch (error) { 
      console.error(error)      
   }
}