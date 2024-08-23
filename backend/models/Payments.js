import mongoose, { Schema } from "mongoose";

const PaymentSchemal = mongoose.Schema(
    {
        Booking_ID:{
            type: Schema.Types.ObjectId,
            ref: "Bookings",
            required: true
        },
        Amount: {
            type: Number,
            required: true
        },
        Payment_method: {
            type: String,
            required: true
        },
        Payment_status: {
            type: String,
            required: true
        },
    },
    {timestamp: true}
);

const Payment = mongoose.model("Payments", PaymentSchemal);
export default Payment;