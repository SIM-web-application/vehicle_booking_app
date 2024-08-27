import mongoose, { Schema } from "mongoose";

const PaymentSchemal = mongoose.Schema(
    {
        booking_ID:{
            type: Schema.Types.ObjectId,
            ref: "Bookings",
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        payment_method: {
            type: String,
            required: true
        },
        payment_status: {
            type: String,
            required: true
        },
    },
    {timestamp: true}
);

const Payment = mongoose.model("Payments", PaymentSchemal);
export default Payment;