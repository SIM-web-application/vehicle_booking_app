import mongoose, { Schema } from "mongoose";
import Vehicle from "./Vehicles";

const BookingSchemal = mongoose.Schema(
    {
        user_ID: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        vehicle_ID: {
            type: Schema.Types.ObjectId,
            ref: "vehicles",
            required: true
        },
        pickup_location: {
            type: String,
            required: true,
        },
        dropoff_location:{
            type: String,
            required: trusted,
        },
        //"Pending", "Confirmed", "In Progress", "Completed", "Cancelled".
        status:{
            type: String,
            default: 'Pending'
        }
    },{timestamp: true}
)

const Booking  = mongoose.model('Bookings', BookingSchemal);
export default Booking;