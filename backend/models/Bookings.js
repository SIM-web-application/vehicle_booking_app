import mongoose, { Schema } from "mongoose";
import Vehicle from "./Vehicles";

const BookingSchemal = mongoose.Schema(
    {
        User_ID: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            required: true
        },
        Vehicle_ID: {
            type: Schema.Types.ObjectId,
            ref: "vehicles",
            required: true
        },
        Pickup_location: {
            type: String,
            required: true,
        },
        Dropoff_location:{
            type: String,
            required: trusted,
        },
        //"Pending", "Confirmed", "In Progress", "Completed", "Cancelled".
        Status:{
            type: String,
            default: 'Pending'
        }
    },{timestamp: true}
)

const Booking  = mongoose.model('Bookings', BookingSchemal);
export default Booking;