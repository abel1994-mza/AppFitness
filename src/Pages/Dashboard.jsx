import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function ExerciseTable({ exercises }) {
  return (
    <div className="w-full overflow-hidden rounded-sm border border-[#2a2a2a]">
      <div className="grid bg-[#F5C518] px-4 py-2.5"
        style={{ gridTemplateColumns: "40px 1fr 120px 60px" }}>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-black">#</span>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-black">Ejercicio</span>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-black text-center">Series / Reps</span>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-black text-center">Video</span>
      </div>
      {exercises.map((ex, i) => (
        <div
          key={i}
          className="grid items-center px-4 py-3 border-t border-[#1e1e1e] transition-colors hover:bg-[#1c1c1c]"
          style={{
            gridTemplateColumns: "40px 1fr 120px 60px",
            backgroundColor: i % 2 === 0 ? "#141414" : "#111111",
          }}
        >
          <div className="w-6 h-6 rounded-full bg-[#F5C518] flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-black text-black">{i + 1}</span>
          </div>
          <span className="text-[13px] text-[#cccccc] font-normal pr-3">{ex.name}</span>
          <div className="flex justify-center">
            <span className="bg-[#252525] text-[#F5C518] font-bold text-[11px] px-3 py-1 rounded-full">
              {ex.reps}
            </span>
          </div>
          <div className="flex justify-center">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#F5C518] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1"
            >
              <span className="text-[9px]">▶</span> Ver
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const navigate = useNavigate()
  const [routine, setRoutine] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeWeek, setActiveWeek] = useState(0)
  const [activeDay, setActiveDay] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
      return
    }

    const fetchRoutine = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/routines/me`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        const data = await res.json()

        if (!res.ok) {
          setError("No tienes una rutina asignada todavía")
          return
        }

        setRoutine(data.data)
      } catch (err) {
        setError("Error al cargar la rutina")
      } finally {
        setLoading(false)
      }
    }

    fetchRoutine()
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
      <p className="text-[#F5C518]">Cargando rutina...</p>
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
      <p className="text-gray-400">{error}</p>
    </div>
  )

  const week = routine.semanas[activeWeek]
  const dayKey = activeDay[activeWeek] ?? "A"
  const exercises = week?.days[dayKey] ?? []

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-sans">

      {/* HEADER */}
      
      <header className="bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-5 flex items-center justify-between">
            <button onClick={()=>navigate(-1)}>Volver</button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[32px] leading-none">🦁</span>
              <span className="text-[28px] font-black tracking-tight text-[#F5C518] leading-none">
                LionFitness
              </span>
            </div>
            <p className="text-[9px] tracking-[5px] uppercase text-[#555] ml-[46px]">
              Entrena con propósito
            </p>
          </div>
          <div className="text-right">
            <p className="text-[20px] font-light text-white leading-tight">{routine.nombre}</p>
            <p className="text-[9px] tracking-[3px] uppercase text-[#F5C518] mt-1">
              {routine.duracion} · Gym
            </p>
          </div>
        </div>

        {/* Objetivo */}
        <div className="bg-[#F5C518] px-6 py-2.5">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <div className="w-3.5 h-3.5 border-2 border-black rounded-[2px] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-black leading-snug">
              Objetivo: {routine.objetivo}
            </p>
          </div>
        </div>
      </header>

      {/* WEEK TABS */}
      <div className="max-w-4xl mx-auto px-6 mt-6 sticky top-0 z-10 bg-[#0d0d0d] pb-0">
        <div className="grid overflow-hidden rounded-sm border border-[#2a2a2a]"
          style={{ gridTemplateColumns: `repeat(${routine.semanas.length}, 1fr)` }}>
          {routine.semanas.map((w, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className="py-3 px-1 text-center text-[10px] font-extrabold uppercase tracking-wider transition-colors"
              style={{
                backgroundColor: activeWeek === i ? "#F5C518" : "#181818",
                color: activeWeek === i ? "#000" : "#666",
                borderRight: i < routine.semanas.length - 1 ? "1px solid #2a2a2a" : "none",
              }}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-6">
        {week && (
          <>
            <p className="text-[10px] font-extrabold uppercase tracking-[4px] text-[#F5C518] mb-1">
              {week.label}
            </p>
            <h2 className="text-[32px] font-light text-white leading-tight mb-1">
              {week.title}
            </h2>
            <div className="h-[2px] w-12 bg-[#F5C518] mb-4" />
            <p className="text-[11px] text-[#555] italic mb-5">{week.schedule}</p>

            {/* Day selector */}
            <div className="flex gap-2 flex-wrap mb-5">
              {["A", "B", "C", "D", "E", "F"].filter(d => week.days[d]?.length > 0).map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(prev => ({ ...prev, [activeWeek]: d }))}
                  className="px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest rounded-sm border transition-all"
                  style={{
                    backgroundColor: dayKey === d ? "#F5C518" : "transparent",
                    color: dayKey === d ? "#000" : "#bbb",
                    borderColor: dayKey === d ? "#F5C518" : "#444",
                  }}
                >
                  Día {d}
                </button>
              ))}
            </div>

            <ExerciseTable exercises={exercises} />
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 py-4 mt-6 border-t border-[#1e1e1e] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🦁</span>
          <span className="text-[13px] font-black text-[#F5C518]">LionFitness</span>
        </div>
        <button
          onClick={() => { localStorage.removeItem("token"); navigate("/login") }}
          className="text-[11px] text-[#444] hover:text-red-400 transition-colors"
        >
          Cerrar sesión
        </button>
      </footer>

    </div>
  )
}

export default Dashboard