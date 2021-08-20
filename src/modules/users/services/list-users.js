import User from "../../../shares/database/models/user"

const listUsersService = async () => {
  return User.find()
}

export default listUsersService;