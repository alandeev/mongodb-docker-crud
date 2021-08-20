import createUserService from "../services/create-user";
import listUsersService from "../services/list-users";

const userController = {
  listUsers: async (req, res) => {
    try{
      const users = await listUsersService();
      console.log(users)
      return res.json(users)
    }catch(error) {
      console.log(error) 

      return res.json(error)
    }
  },
  addUser: async (req, res) => {
    const user = await createUserService(req.body);
    
    return res.json(user)
  }
}

export default userController;