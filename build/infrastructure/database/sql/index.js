"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/***** Sequelize service ******/
const sequelize_1 = require("sequelize");
// Models
const UserModel_1 = __importDefault(require("./models/UserModel"));
const Product_1 = __importDefault(require("./models/Product"));
// Seeders
const seeders_1 = __importDefault(require("./seeders/"));
require('dotenv').config({ path: '.env' });
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    /***************
       Declare config variables to database
    ***************/
    try {
        const sequelize = new sequelize_1.Sequelize("challenge_db", "root", "123456", {
            host: "localhost",
            dialect: "mysql",
            port: 3307,
        });
        const User = (0, UserModel_1.default)(sequelize);
        const Product = (0, Product_1.default)(sequelize);
        User.hasMany(Product);
        Product.belongsTo(User);
        const parentModels = {
            Product,
            User,
        };
        yield sequelize.authenticate();
        yield sequelize.sync({ force: true });
        yield (0, seeders_1.default)(parentModels);
        return Object.assign({}, parentModels);
    }
    catch (error) {
        console.error(error);
    }
});
