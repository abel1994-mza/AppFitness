import mongoose from "mongoose"

const exerciseSchema = new mongoose.Schema({
  name: String,
  reps: String,
})
const daySchema = new mongoose.Schema({
  A: [exerciseSchema],
  B: [exerciseSchema],
  C: [exerciseSchema],
  D: [exerciseSchema],
  E: [exerciseSchema],
  F: [exerciseSchema],
})
const weekSchema = new mongoose.Schema({
  id: Number,
  label: String,
  title: String,
  schedule: String,
  days: daySchema,
})

const routineSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  nombre: String,
  duracion: String,
  objetivo: String,
  semanas: [weekSchema],
  createdAt: { type: Date, default: Date.now }
})

const Routine = mongoose.model("Routine", routineSchema)

export default Routine