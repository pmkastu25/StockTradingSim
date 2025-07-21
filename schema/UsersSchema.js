const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your Email is required"],
    unique: true,
  },
  username: { type: String, required: [true, "Your Username is required"] },
  password: { type: String, required: [true, "Your Password is required"] },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

// UsersSchema.pre("save", async function(next) {
//   if (!this.isModified("password")) return next(); // ✅ Only hash if password changed
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// }); 

module.exports =  {UsersSchema} ;
