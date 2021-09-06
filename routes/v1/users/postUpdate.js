const userService=require("../../../services/user")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

module.exports=()=>{  
    return (req,res)=>{
        const userId=req.params.id
        const user= userService.getUser(userId)
       // console.log(req.body)
        const name=user.name
        const id=userService.insertUser(user)    
        res.status(200).json({
            success:true,
            message: "Updated with id "+id+" successfully "
        })
    }
}