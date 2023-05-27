import { Schema, model } from "mongoose";

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

// Ensure virtual fields are serialised.
CategorySchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

const CategoryModel = model("Category", CategorySchema);

export default CategoryModel;
