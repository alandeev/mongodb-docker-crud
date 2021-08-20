import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: 'string',
  age: 'number'
})

const User = mongoose.model('users', UserSchema)

export default User;