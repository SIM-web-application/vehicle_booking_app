import mongoose from "mongoose";

const UserSchemal = mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique:true
        },
        password:{
            type: String,
            required: true
        },
        phone_number: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            default: 'Customer'
        },
    },
    {timestamps : true}
);

const User = mongoose.model("Users", UserSchemal);
export default User;