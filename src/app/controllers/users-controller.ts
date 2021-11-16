import { Request, Response, Router } from 'express';
import userCommands from '../../core/commands/users'

export class UsersController {
   private userCommands : any
   controller() {
      this.userCommands = userCommands()
   }
   /**********************************/
   /******* CREATE USER METHOD *******/
   /**********************************/
   async createUser(request: Request, response: Response) {
      console.log('CONTROLADOR');
      const userCreate = await userCommands()
      await userCreate?.createUser(request)
   }
}