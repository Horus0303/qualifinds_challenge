import { model, Schema } from "mongoose";

const userSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   }
}, {
   timestamps: true
});

export default model("User", userSchema);