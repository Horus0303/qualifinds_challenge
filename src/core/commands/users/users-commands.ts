export default class usersCommands {
   engineSql: any;
   engineNoSql: any

   constructor(engine: any) {
      this.engineSql = engine.sqlConnect
      this.engineNoSql = engine.noSqlConnect
   }

   /*******************************/
   /********* CREATE USER *********/
   /*******************************/
   async createUser (userData: object) {
     /***** Create - storage user *****/
   //   return await this.engineSql.User.create(userData)
   }

   /*******************************/
   /********* CREATE USER *********/
   /*******************************/
   async createUserDetail(userData: object) {
      /***** Create - storage user *****/
      return await this.engineNoSql.User.create(userData)
   }
}