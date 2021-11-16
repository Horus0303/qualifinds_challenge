"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    return sequelize.define("products", {
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            onDelete: 'CASCADE',
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
        }
    });
};
