const userService=require("../../../services/user")
module.exports=()=>{
    const allUsers = userService.getAllUsers()
    return (req,res)=>{
        res.status(200).json({
            success:true,
            message: allUsers
        })
    }
}