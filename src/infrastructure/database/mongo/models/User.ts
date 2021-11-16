import { model, Schema } from "mongoose";

const userSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
}, {
   timestamps: true
});

export default model("User", userSchema);