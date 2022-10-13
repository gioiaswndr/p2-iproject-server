require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const routes = require("./routes/index")
const errorHandler = require('./middlewares/errorHandler')











app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
















app.use(routes)

app.use(errorHandler)

server.listen(port, () => {
  console.log("MASIH DI LOCAL", port, "BRO!")
})

