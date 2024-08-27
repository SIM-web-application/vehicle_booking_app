import mongoose, { Schema } from "mongoose";

const ReviewSchemal = mongoose.Schema(
    {
        vehicle_ID: {
            type: Schema.Types.ObjectId,
            ref: "Vehicles",
            required: true
        },
        rating:{
            type: Number,
            min: 1, max: 5,
            required: true
        },
        comments:[
            {
                user_id:
                    {  type: Schema.Types.ObjectId, 
                        ref: "Users",
                        required: true
                    },
                text: { type: String, required: true },
                createdAt: { type: Date, default: Date.now }
            }
        ],   
    },{timestamp: true}
)

const Review = mongoose.model("Review", ReviewSchemal)
export default Review;