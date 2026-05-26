import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Lead from "./models/Lead.js"
import authRouter from "./routes/auth.js"
import authMiddleware from "./middleware/auth.js"
import routineRouter from "./routes/routines.js"
import Routine from "./models/Routine.js"


dotenv.config()
// updated
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

app.use("/api/routines", routineRouter)

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

// Endpoint temporal para crear rutina de prueba
app.post("/api/routines/seed", async (req, res) => {
  try {
    const routine = await Routine.create({
      userId: "6a0b5c082407c4ce9e46d716",
      nombre: "Plan de Adaptación",
      duracion: "4 semanas",
      objetivo: "Volver a entrenar progresivamente · Mejorar fuerza, movilidad y tolerancia al esfuerzo",
      semanas: [
        {
          id: 1,
          label: "Semana 1",
          title: "Adaptación Técnica y Bajo Volumen",
          schedule: "Lunes: Día A · Miércoles: Día B · Sábado: Día C (opcional)",
          days: {
            A: [
              { name: "Sentadilla Goblet", reps: "3×10" },
              { name: "Press inclinado mancuerna", reps: "3×10" },
              { name: "Remo sentado", reps: "3×12" },
              { name: "Peso muerto rumano", reps: "3×10" },
              { name: "Split squat", reps: "2×10" },
              { name: "Pallof press", reps: "2×12" },
              { name: "Farmer carry", reps: "3 vueltas" }
            ],
            B: [
              { name: "Hip thrust", reps: "3×10" },
              { name: "Jalón al pecho", reps: "3×12" },
              { name: "Press militar mancuerna", reps: "3×10" },
              { name: "Step up", reps: "2×10" },
              { name: "Curl femoral", reps: "3×12" },
              { name: "Copenhagen plank", reps: "2 series" },
              { name: "Dead bug", reps: "2×10" }
            ],
            C: [
              { name: "Bicicleta o trineo", reps: "1 min" },
              { name: "Kettlebell deadlift", reps: "12 reps" },
              { name: "Push up inclinado", reps: "10 reps" },
              { name: "Remo TRX", reps: "12 reps" },
              { name: "Walking lunges", reps: "10 reps" },
              { name: "Carry", reps: "3 vueltas" }
            ]
          }
        }
      ]
    })

    res.status(201).json({ success: true, data: routine })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error creating routine" })
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