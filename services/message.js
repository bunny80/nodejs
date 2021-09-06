const getUserMessage=(method)=>{
    return getMessage(method)
}
const getMessage=(method)=>{
    switch(method){
        case "GET":
            message="GET"
            break;
        case "POST":
            message="POST"
            break;
        default:
            message="error"
            break;
    }
    return message
}
module.exports={
    getMessage
}