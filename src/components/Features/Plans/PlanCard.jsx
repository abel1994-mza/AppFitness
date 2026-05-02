import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../../context/UseAppContext"

const PlanCard = ({ name, level, price, description, features, popular }) => {
  const navigate = useNavigate()
  const { setSelectedPlan } = useAppContext()

  const handleElegir = () => {
    setSelectedPlan(name)   // guarda el plan en la mochila
    navigate("/contact")    // va al formulario
  }

  return (
    <div className={`bg-surface border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(223,155,61,0.3)] ${popular ? "border-primary" : "border-border"}`}>
      
      {popular && (
        <span className="self-start bg-primary text-bg text-xs font-medium px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <div>
        <p className="text-text-secondary text-xs uppercase tracking-widest mb-1">{level}</p>
        <h3 className="text-white text-2xl font-display">{name}</h3>
      </div>

      <div className="flex items-end gap-1">
        <span className="text-primary text-4xl font-medium">{price}</span>
        <span className="text-text-secondary text-sm mb-1">€/mes</span>
      </div>

      <p className="text-text-secondary text-sm">{description}</p>

      <ul className="flex flex-col gap-2">
        {features.map((feature, i) => (
          <li key={i} className="text-text-secondary text-sm flex gap-2">
            <span className="text-primary">→</span> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleElegir}
        className="mt-auto w-full border border-primary text-primary hover:bg-primary hover:text-bg py-3 rounded-lg text-sm font-medium transition-colors"
      >
        Elegir plan
      </button>

    </div>
  )
}

export default PlanCard