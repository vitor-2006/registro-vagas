import mongoose from "mongoose";

const VagaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    stack: {
        type: [String],
        required: true
    },
    nivel: {
        type: String,
        required: true
    }
})
export const Vaga = mongoose.model('vaga', VagaSchema)