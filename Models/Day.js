import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Day = new Schema(
  {
    Date: {type: Date, default: Date.now},
    Items: [{ type: Schema.Types.ObjectId, ref: "items" }],
  }
);

export default mongoose.model("days", Day);
