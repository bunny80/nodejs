const routes= require("express").Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

module.exports=()=>{
    routes.get('/',require("./getAllUsers")())
    routes.get('/:id',require("./get")())
    routes.post('/register',jsonParser,require("./post")())
    routes.post('/:id',jsonParser,require("./postUpdate")())
    routes.post("/login",require("./auth"))
    return routes
}