const express = require("express")
const router = express.Router()

router.get("/users", (req, res) => {
    
    const data = ["data 1", "data 2"]
    
    res.send({data})
})

module.exports = router