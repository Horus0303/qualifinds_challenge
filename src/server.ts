import express from 'express';
import * as bodyParser from 'body-parser';

// Routes
import usersRoutes from './app/routes/user-routes'

require('dotenv').config({path: '.env'})
class Server {
   public app: express.Application

   constructor() {
      this.app = express()
      this.config()
      this.routes()
   }

   config() {
      this.app.set('port', process.env.PORT || 8081);
   }
    
   routes() {
      this.app.use('/users', usersRoutes);
   }

   start() {
      this.app.listen(this.app.get('port'), () => {
         console.log(`Puerto escuchando en ${this.app.get('port')}`);
      })
   }
}

const server = new Server();
server.start()