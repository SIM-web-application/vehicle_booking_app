import mongoose, { Schema } from "mongoose";

const VehicleSchemal = mongoose.Schema(
    {  
        vehicle_name:{
            type: String,
            required: true
        },
        // loại xe
        vehicle_type:{
            type: String,
            required: true
        },
        // biển số xe
        lisense_plate: {
            type: String,
            required: true
        },
        price_per_km:{
            type: Number,
            required: true
        },
        user_ID:{
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