import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Item = new Schema({
    Carbs: Number,
    Fats: Number,
    Proteins: Number,
    Time: Number
})

export default mongoose.model("items", Item)