import '../database'
import routers from './routers';

const PORT = process.env.SERVER_PORT

const express = require('express');

const app = express()

app.use(express.json());

app.use(routers);

app.listen(PORT, () => {
  console.log(`Running: ${PORT}`)
})

export default app;