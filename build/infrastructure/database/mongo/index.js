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
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("./models/User"));
const config_1 = require("./config/config");
const mongoSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
    console.log(`mongodb://root:123456@${config_1.config.HOST}:${config_1.config.PORT}/${config_1.config.SCHEMA}`);
    yield mongoose_1.default.connect(`mongodb://root:123456@${config_1.config.HOST}:${config_1.config.PORT}/${config_1.config.SCHEMA}?authSource=admin`, dbOptions).then(resp => {
        console.log("Mongodb Connection stablished");
    }).catch(err => {
        console.log("Mongodb connection error:", err);
        process.exit();
    });
    return { User: User_1.default };
});
exports.default = mongoSetup;
