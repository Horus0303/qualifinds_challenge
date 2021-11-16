import { DataTypes } from "sequelize"
export default (sequelize: any) => {
   return sequelize.define("products", {
      id: {
         type: DataTypes.INTEGER.UNSIGNED,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      price: {
         type: DataTypes.STRING,
         allowNull: false
      },
      userId: {
         type: DataTypes.INTEGER.UNSIGNED,
         onDelete: 'CASCADE',
         allowNull: false,
         references: {
            model: "users",
            key: "id"
         }
      }
   })
}