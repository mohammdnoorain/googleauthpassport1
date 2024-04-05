const mongoose = require("mongoose");

const allSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },

    password: { type: String },
    
  
    googleId: {
      type: String,
      unique: true,
    },
    accesstoken:{
      type:String,
    },
 
   
  },

);
const Login = mongoose.model("test4", allSchema);
module.exports = Login;
