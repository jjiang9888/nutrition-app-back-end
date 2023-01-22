import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let Item = new Schema({
    Carbs: Number,
    Fats: Number,
    Proteins: Number,
    
},{timestamps: true})

let Day = new Schema({
    Day: {timestamps: true},
    Items: [{Item}]
})
export default mongoose.model("days", Day)