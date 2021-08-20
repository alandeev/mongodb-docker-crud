import User from "../../../shares/database/models/user"

const createUserService = async ({ name, age }) => {
  if(!name || !age) {
    throw new Error('"name" or "age" is empty')
  }

  const user = await User.create({
    name,
    age
  })

  return user;
}

export default createUserService;