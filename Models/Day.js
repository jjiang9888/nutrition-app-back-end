import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const Item = new Schema({
    Name: String,
    Carbs: Number,
    Fats: Number,
    Proteins: Number,
    Quantity: Number
},{timestamps: true})

const Day = new Schema({
    Items: [{Item}]
},{timestamps: true})
export default mongoose.model("days", Day)