import express from "express"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const router = express.Router()

// REGISTRO
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Verificar si el email ya existe
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" })
    }

    // Encriptar la contraseña
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Crear el usuario
     await User.create({ name, email, password: hashedPassword }) 

    res.status(201).json({ success: true, message: "User created" })

  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Buscar el usuario
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    // Verificar la contraseña
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    // Generar el token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.json({ success: true, token })

  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})

export default router