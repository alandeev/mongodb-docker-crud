import { Router } from 'express'
import userController from '../controllers/user.controllers';

const routes = Router()

routes.get('/', userController.listUsers)
routes.post('/', userController.addUser)

export default routes;