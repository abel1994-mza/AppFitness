import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Lead from "./models/Lead.js"
import authRouter from "./routes/auth.js"
import authMiddleware from "./middleware/auth.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ mensaje: "LionFitness API funcionando" })
})

// Ruta protegida — solo con token válido
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user })
})

app.use("/api/auth", authRouter)

app.get("/api/plans", (req, res) => {
  res.json([
    { id: 1, name: "Bono 4", price: 158, sessions: 4 },
    { id: 2, name: "Bono 5", price: 192, sessions: 5 },
    { id: 3, name: "Bono 8", price: 305, sessions: 8 },
  ])
})

app.post("/api/contact", async(req, res) => {
  try {
     const { name, email, plan, training, message } = req.body
  console.log("Nuevo lead:", { name, email, plan, message,training })
    const lead = await Lead.create({ name,email,plan, message,training })
  res.status(201).json({ success: true, data: lead })
  } catch (error) {
     res.status(500).json({ success: false, error: "Error al guardar el lead" })
  }
 
})

mongoose.connect(process.env.MONGODB_URL, {
  serverSelectionTimeoutMS: 10000,
  directConnection: false
})
  .then(() => {
    console.log("✅ Conectado a MongoDB")
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error("❌ Error al conectar MongoDB", err)
  })
// // Arranca el servidor
// app.listen(PORT, ()=>{
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
// })