import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        maxlength: 60,
        },
        desc: {
        type: String,
        required: true,
        maxlength: 200,
        },
        img: {
        type: String,
        required: true,
        },
        prices: {
        type: [Number], // Here the word "Array" can be typed here but that will mean any data type can be palced there. However, [Number] as written is to give a specific data type for the array.
        required: true,
        },
        extraOptions: {
        type: [
            {
            text: { type: String, required: true },
            price: { type: Number, required: true },
            },  // Type here also is an array that has objects which are text and prices
        ],
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
// The conditon in the export means "if the you already have this product models(mongoose.models.Product), use it. Do not create again and if not create it again in the db"