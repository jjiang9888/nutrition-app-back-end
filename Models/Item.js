import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Item = new Schema({
    Name: String,
    Calories: Number,
    Carbs: Number,
    Fats: Number,
    Proteins: Number,
    Quantity: Number,
    Notes: String
},{timestamps: true})

export default mongoose.model("items", Item)