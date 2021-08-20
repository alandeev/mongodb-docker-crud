import mongoose from 'mongoose'

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

// const tryConnect = () => {
  mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`, {
    useNewUrlParser: true,

  })
//   .catch(() => {
//     setTimeout(tryConnect, 3000)
//   })
// }

mongoose.connection.once('open', () => console.log('database connected'))
mongoose.connection.once('error', () => console.log('database error'))

// tryConnect()