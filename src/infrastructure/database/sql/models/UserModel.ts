import { DataTypes } from "sequelize"
export default (sequelize: any) => {
   return sequelize.define("users", {
      id: {
         type: DataTypes.INTEGER.UNSIGNED,
         autoIncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   })
}