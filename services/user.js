const bcrypt = require('bcryptjs');
const encryptedPassword =  ""
const allUsers=[{
    id:1,
    Name:"Akhil",
    Email:"saiakhil008@gmail.com",
    Password: 23456,
    Mobile:123456789,
    ProfilePic:"./quantiphi.jpg"
},
{
    id:2,
    name:"Rama",
    Email:"rama008@gmail.com",
    password:12345633,
    Mobile:987654321,
    ProfilePic:"./quantiphi.jpg"
}]
const getAllUsers=()=>{
    return allUsers
}
const getUser=(id)=>{
    const user= allUsers.filter((eachUser)=>eachUser.id==id)
    return user
}
const insertUser=(obj)=>{
    const id=allUsers.length+1
    let user={
    Mobile:obj.Mobile,
    name:obj.name,
    email:obj.email,
    password:obj.password,
    ProfilePic:obj.ProfilePic
    }
    allUsers.push(user)
    return id
}
const updateUser=(obj)=>{

}
module.exports={
    getAllUsers,getUser,insertUser
}