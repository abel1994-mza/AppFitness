import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error)
        return
      }

      // Guarda el token en localStorage
      localStorage.setItem("token", data.token)

      // Navega al perfil
      navigate("/profile")

    } catch (error) {
      setError("Server error, try again")
    }
  }

  return (
    <section className="bg-bg min-h-screen flex items-center justify-center p-6">
      <div className="bg-surface border border-border rounded-xl p-8 w-full max-w-md">

        <p className="text-primary font-display text-sm uppercase tracking-widest mb-2">
          Lion Fitness
        </p>
        <h1 className="text-white text-3xl font-display mb-8">Login</h1>

        {error && (
          <p className="text-red-400 text-sm mb-4 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className="text-text-secondary text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              className="bg-bg border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-text-secondary text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="bg-bg border border-border rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-bg font-medium py-3 rounded-lg transition-colors"
          >
            Login
          </button>

          <p className="text-text-secondary text-sm text-center">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-primary hover:underline"
            >
              Register
            </button>
          </p>

        </form>
      </div>
    </section>
  )
}

export default Login