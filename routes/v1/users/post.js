const userService=require("../../../services/user")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

module.exports=()=>{  
    return (req,res)=>{
       const requestData=req.body
       // console.log(req.body)
        const name=requestData.name
        const id=userService.insertUser(requestData)    
        res.status(200).json({
            success:true,
            message: "Added Record with name "+name+" successfully "+id
        })
    }
}