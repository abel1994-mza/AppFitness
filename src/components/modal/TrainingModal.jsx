import { useEffect } from "react"
import { X, Timer, BarChart } from "lucide-react" 
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../context/UseAppContext"

const TrainingModal = ({ training, onClose }) => {
  const navigate = useNavigate()
  const { setSelectedTraining } = useAppContext()

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

   const handleThis = () => {
    setSelectedTraining(training.title)  // mete el entrenamiento en la mochila
    onClose()                            // cierra el modal
    navigate("/Contact")                 // va al formulario
  }

  const levelColor = {
    "Para todos": "text-green-400",
    "Intermedio": "text-yellow-400",
    "Avanzado": "text-red-400",
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-80 flex items-start justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-border rounded-xl max-w-lg w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl text-white font-display mb-1">
          {training.title}
        </h2>

        <div className="flex gap-4 text-sm mb-4">
          <span className="flex items-center gap-1 text-text-secondary">
            <Timer size={14} /> {training.duration}
          </span>
          <span className={`flex items-center gap-1 ${levelColor[training.level]}`}>
            <BarChart size={14} /> {training.level}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {training.details.longDesc}
        </p>

        <div className="border-t border-border pt-4">
          <p className="text-white text-sm font-medium mb-3">Incluye:</p>
          <ul className="space-y-2">
            {training.details.includes.map((item, i) => (
              <li key={i} className="text-text-secondary text-sm flex gap-2">
                <span className="text-primary">→</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={handleThis} className="mt-6 w-full bg-primary hover:bg-primary-hover text-bg font-medium py-3 rounded-lg transition-colors">
          Quiero este entrenamiento
        </button>
      </div>
    </div>
  )
}

export default TrainingModal