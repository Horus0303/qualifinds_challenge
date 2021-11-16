"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    SCHEMA: process.env.MONGODB_DB || 'test_db',
    HOST: process.env.MONGO_HOST || '127.0.0.1',
    USER: process.env.MONGODB_USER || 'root',
    PORT: process.env.MONGODB_PORT || '27018',
    PASSWORD: process.env.MONGODB_PASSWORD || '123456'
};
