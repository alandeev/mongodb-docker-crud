import createUserService from "../services/create-user";
import listUsersService from "../services/list-users";

const userController = {
  listUsers: async (req, res) => {
    const users = await listUsersService();
    if(users.length === 0) {
      throw new Error("Ola mundo")
    }
    
    return res.json(users)
  },
  addUser: async (req, res) => {
    const user = await createUserService(req.body);
    
    return res.json(user)
  }
}

export default userController;