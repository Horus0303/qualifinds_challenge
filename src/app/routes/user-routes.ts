import { Request, Response, Router } from 'express';
import { UsersController } from '../controllers/users-controller';
const usersController = new UsersController()

class UsersRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/', async (req: Request, res: Response) => await usersController.createUser(req, res))
    }
}

const userRoutes = new UsersRoutes();
userRoutes.routes()

export default userRoutes.router