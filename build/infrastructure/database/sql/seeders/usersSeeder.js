"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (UserModel) => {
    return UserModel.bulkCreate([{
            id: 1,
            email: "test@gmail.com",
            password: "123456"
        }]);
};
