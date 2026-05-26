import express from "express"
import Routine from "../models/Routine.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

// GET /api/routines/me — obtiene la rutina del usuario logueado
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const routine = await Routine.findOne({ userId: req.user.id })

    if (!routine) {
      return res.status(404).json({ error: "No routine found" })
    }

    res.json({ success: true, data: routine })
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})

export default router