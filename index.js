require("dotenv").config()

const express = require('express')
const app = express()

const dbConnect = require('./config/mongo')

app.use(cors())

const port = process.env.PORT || 3001


app.use("/api",require("./routes/users"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

dbConnect();
