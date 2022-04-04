require("dotenv").config()

const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./config/mongo')
const { application } = require("express")

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001


app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

dbConnect();
