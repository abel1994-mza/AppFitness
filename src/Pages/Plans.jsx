import PlanCard from "../components/Features/plans/PlanCard"

import { plansPresencial } from "../data/plans"

const Plans = () => {
  return (
    <section className="bg-bg py-20">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center gap-10">

        <p className="text-primary font-display">Elige tu plan</p>
        <h1 className="text-white text-3xl font-body">Planes y precios</h1>
        <p className="text-text-secondary text-center max-w-lg">
          Cada plan está diseñado para un nivel diferente. Elige el que mejor se adapta a tus objetivos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {plansPresencial.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Plans