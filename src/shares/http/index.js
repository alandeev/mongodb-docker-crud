import 'express-async-errors'
import '../database'
import routers from './routers';

const PORT = process.env.SERVER_PORT

const express = require('express');

const app = express()

app.use(express.json());

app.use(routers);

app.use((error, req, res, next) => {
  if(error.isThreated) {
    return res.json({
      status: "error",
      error: error.message
    })
  }
  
  console.error(error);

  return res.status(500).json({
    status: "error",
    error: "internal server error"
  })
})

app.listen(PORT, () => {
  console.log(`Running: ${PORT}`)
})

export default app;