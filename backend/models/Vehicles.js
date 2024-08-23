import mongoose, { Schema } from "mongoose";

const VehicleSchemal = mongoose.Schema(
    {  
        // loại xe
        Vehicle_type:{
            type: String,
            required: true
        },
        // biển số xe
        Lisense_plate: {
            type: String,
            required: true
        },
        Price_per_km:{
            type: Number,
            required: true
        },
        User_ID:{
            type: Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        }
    },
    {
        timestamp : true
    }
);

const Vehicle = mongoose.model('vehicles', VehicleSchemal);
export default Vehicle;