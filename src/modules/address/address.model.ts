import { Schema, model } from "mongoose";

const AddressSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        address_line_1: {
            type: String,
            required: true,
        },
        address_line_2: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        zip_code: {
            type: Number,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        user_id: { type: String, ref: "User" },
    },
    { timestamps: true },
);

// Ensure virtual fields are serialised.
AddressSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


// AddressSchema.post("save", async function (docs,next) {
//     await checkIsProfileComplete(null,docs);
//     next();
// });

// AddressSchema.post("findOneAndUpdate", async function (docs,next) {
//     await checkIsProfileComplete(null,docs);
//     next();
// });

const AddressModel = model("Address", AddressSchema);

export default AddressModel;
