export default (UserModel: any) => {
   return UserModel.bulkCreate([{
      id: 1,
      email: "test@gmail.com",
      password: "123456"
   }])
}