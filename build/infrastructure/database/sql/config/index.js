"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    database: process.env.DATABASE || "challenge_db",
    username: process.env.USERNAME || "root",
    host: process.env.HOST || "127.0.0.1",
    password: process.env.PASS || "123456",
    dialectOptions: { timezone: "local" },
    pool: { max: 30, min: 1, idle: 1000 },
    timezone: "America/Mexico_City",
    models: [__dirname + '/models'],
    operatorAliases: false,
    dialect: "mysql",
    $like: sequelize_1.Op.like,
    logging: true,
    $gte: sequelize_1.Op.gte,
    $lte: sequelize_1.Op.lte,
    $eq: sequelize_1.Op.eq,
    $ne: sequelize_1.Op.ne,
    $or: sequelize_1.Op.or,
};
