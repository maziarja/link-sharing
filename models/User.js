import { model, models, Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  firstName: {
    type: String,
    // required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    // required: [true, "Last name is required"],
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  image: [String],
  links: [
    {
      platform: String,
      url: String,
      id: String,
    },
  ],
});

const User = models?.User || model("User", userSchema);

export default User;
