import mongoose from "mongoose"

mongoose.set('returnOriginal', false)

mongoose.connect("mongodb://127.0.0.1:27017/Nutrition-api").catch((err) => {console.log(`Error connection to MongoDB: ${err.message}`)})


export default mongoose.connection;