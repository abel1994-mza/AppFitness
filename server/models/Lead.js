import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  plan: String,
  training: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})
const Lead = mongoose.model("Lead", leadSchema)

export default Lead