const express = require('express')
const app=express()
const getServices=require("./services/message")
require('dotenv').config()
const port=process.env.PORT || 8080
const messageService=require("./services/message")
const routesController=require("./routes/v1")()
const middleware=require("./middleware/testMw")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


app.get('/',middleware.testMw,(req, res)=>{
    res.status(200).json({
        success: true,
        message: getServices.getMessage("GET")
    })
})
app.post('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: getServices.getMessage("POST")
    })
})
app.use("/api",routesController)
app.listen(port,()=>{
    console.log('listening on port:', port)
})

