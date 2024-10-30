import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
});

const crudmodel = new mongoose.model("samplecrud", crudSchema);
export default crudmodel;

