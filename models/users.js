const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        rut:{
            type:String,
            unique:true
        },
        name:{
            type:String
        },
        lastName:{
            type:String
        },
        address:{
            type:String
        },
        phone:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
        },
        role:{
            type:["profesor", "alumno"],
            default:"alumno"
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("users", UserScheme)