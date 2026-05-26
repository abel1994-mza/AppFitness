import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/login")
      return
    }

    // Decodifica el token para obtener los datos del usuario
    const payload = JSON.parse(atob(token.split(".")[1]))
    setTimeout(() => setUser(payload), 0)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (!user) return null

  return (
    <section className="bg-bg min-h-screen py-20">
      <div className="w-full max-w-2xl mx-auto px-6">

        <p className="text-primary font-display text-sm uppercase tracking-widest mb-2">
          Mi cuenta
        </p>
        <h1 className="text-white text-3xl font-display mb-8">Profile</h1>

        <div className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-text-secondary text-sm">Email</p>
            <p className="text-white">{user.email}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-text-secondary text-sm">ID</p>
            <p className="text-white text-sm">{user.id}</p>
          </div>
        </div>
        <button
  onClick={() => navigate("/dashboard")}
  className="mt-4 bg-primary hover:bg-primary-hover text-bg font-medium px-6 py-3 rounded-lg transition-colors text-sm"
>
  Ver mi rutina
</button>

        <button
          onClick={handleLogout}
          className="mt-6 border border-border text-text-secondary hover:border-red-400 hover:text-red-400 px-6 py-3 rounded-lg transition-colors text-sm"
        >
          Logout
        </button>

      </div>
    </section>
  )
}

export default Profile