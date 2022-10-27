import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer: {
        type: String,
        required: true,
        maxlength: 60,
        },
        address: {
        type: String,
        required: true,
        maxlength: 200,
        },
        total: {
        type: Number,
        required: true,
        },
        status: {
        type: Number,
        default: 0,
        },
        method: {
        type: Number,
        required:true
        },  //method here is for payment type either payment by cash or by paypal. If it is cash it'd be 0 and when it's paypal, it'd be 1
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
// The conditon in the export means "if the you already have this product models(mongoose.models.Order), use it. Do not create again and if not create it again in the db"