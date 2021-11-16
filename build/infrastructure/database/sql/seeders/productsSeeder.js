"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ProductModel) => {
    return ProductModel.bulkCreate([{
            id: 1,
            name: "producto1",
            price: "500",
            userId: 1
        }]);
};
