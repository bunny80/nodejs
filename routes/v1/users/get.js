const userService=require("../../../services/user")
module.exports=()=>{  
    return (req,res)=>{
        const userId=req.params.Mobile
        const user= userService.getUser(userId)
        let message=""
        if(user.length>0){
            message=user
        }
        else{
            message="no user found"
        }
        res.status(200).json({
            success:true,
            message
        })
    }
}