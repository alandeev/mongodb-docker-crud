import { Router } from 'express'

const routers = Router()

import userRouters from "../../../modules/users/routers/user.routes";

routers.use('/users', userRouters) // users routers

export default routers