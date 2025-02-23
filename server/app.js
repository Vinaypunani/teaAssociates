const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const PORT = process.env.PORT || 7001

app.get('/',(req,res)=>{
    res.send("hello world !")
})

app.listen(PORT, ()=>console.log(`server running on port : ${PORT}`))