import mongoose from "mongoose";

const UserSchemal = mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        Email:{
            type: String,
            required: true,
        },
        Password:{
            type: String,
            required: true
        },
        Phone_number: {
            type: String,
            required: true
        },
        Role: {
            type: String,
            required: true
        },
    },
    {timestamps : true}
);

const User = mongoose.model("Users", UserSchemal);
export default User;