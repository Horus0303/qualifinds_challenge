export default (ProductModel: any) => {
   return ProductModel.bulkCreate([{
      id: 1,
      name: "producto1",
      price: "500",
      userId: 1
   }])
}