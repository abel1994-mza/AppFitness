import { Navigate, useNavigate } from "react-router-dom"
import Button from "../ui/Button"

const CTA = ()=>{
  const navigate = useNavigate()
    return (
       <section className="bg-surface py-20 text-center">

      <h2
        className="text-4xl text-text mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Empieza hoy tu cambio
      </h2>

      <p className="text-text-secondary mb-8">
        No esperes más para mejorar tu físico y tu rendimiento
      </p>

      <Button onClick={()=>navigate("/plans")} text="Ver Planes">
        Ver Planes
      </Button>

    </section>
    )
}

export default CTA