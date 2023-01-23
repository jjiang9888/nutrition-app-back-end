import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Item = new Schema({
    Name: String,
    Carbs: Number,
    Fats: Number,
    Proteins: Number,
    Quantity: Number
},{timestamps: true})

export default mongoose.model("items", Item)