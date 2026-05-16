import { useState } from "react"
import { useAppContext } from "../../../context/UseAppContext"
import {plansPresencial} from "../../../data/plans.js"

const ContactForm = () => {
  const { selectedTraining, selectedPlan } = useAppContext()

  const [form, setForm] = useState({
    name: "",
    email: "",
    training: selectedTraining || "",
    plan: selectedPlan || "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {
    console.log("Form al enviar:", form) 
  e.preventDefault()
    const selectedPlanData = plansPresencial.find((p) => p.name === form.plan)
  const planPrice = selectedPlanData ? `${selectedPlanData.price}€` : ""

  // 1. Guardar en MongoDB
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        plan: `${form.plan}- ${planPrice} `,
        training: form.training,
        message: form.message
      })
    })
    console.log("Lead guardado en MongoDB")
  } catch (error) {
    console.error("Error al guardar lead:", error)
  }

  // 2. Abrir WhatsApp
  const mensaje = `
Hola! Me interesa Lion Fitness 

Nombre: ${form.name}
Email: ${form.email}
Entrenamiento: ${form.training}
Plan: ${form.plan} ${planPrice}
Mensaje: ${form.message}
  `.trim()

  const url = `https://wa.me/659561750?text=${encodeURIComponent(mensaje)}`
  window.open(url, "_blank")
}
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          required
          className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
          className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm">Tipo de entrenamiento</label>
        <select
          name="training"
          value={form.training}
          onChange={handleChange}
          className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
        >
          <option value="">Selecciona un entrenamiento...</option>
          <option value="Fuerza">Fuerza</option>
          <option value="HIIT">HIIT</option>
          <option value="Funcional">Funcional</option>
          <option value="CrossFit">CrossFit</option>
        </select>
      </div>

      {/* <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm">Plan</label>
        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
        >
          <option value="">Selecciona un plan...</option>
          <option value="Starter">Starter — 19€/mes</option>
          <option value="Pro">Pro — 35€/mes</option>
          <option value="Elite">Elite — 49€/mes</option>
        </select>
      </div> */}
      <div className="flex flex-col gap-2">
  <label className="text-text-secondary text-sm">Plan</label>
  <select
    name="plan"
    value={form.plan}
    onChange={handleChange}
    className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
  >
    <option value="">Selecciona un plan...</option>
    {plansPresencial.map((plan) => (
      <option key={plan.id} value={plan.name}>
        {plan.name} — {plan.price}€
      </option>
    ))}
  </select>
</div>

      <div className="flex flex-col gap-2">
        <label className="text-text-secondary text-sm">Mensaje</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntame tus objetivos y nivel actual..."
          rows={4}
          className="bg-surface border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover text-bg font-medium py-3 rounded-lg transition-colors"
      >
        Enviar por WhatsApp
      </button>

    </form>
  )
}

export default ContactForm