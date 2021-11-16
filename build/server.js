"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routes
const user_routes_1 = __importDefault(require("./app/routes/user-routes"));
require('dotenv').config({ path: '.env' });
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 8081);
    }
    routes() {
        this.app.use('/users', user_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Puerto escuchando en ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
