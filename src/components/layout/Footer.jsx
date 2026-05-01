import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Entrenamientos", path: "/training" },
    { label: "Planes", path: "/plans" },
    { label: "Sobre mí", path: "/about" },
    { label: "Contacto", path: "/contact" },
  ]

  return (
    <footer className="bg-surface border-t border-border">

      <div className="w-full max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="flex flex-col gap-4">
          <h3 className="text-primary text-xl font-display tracking-widest">LION FITNESS</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Coaching de CrossFit personalizado para atletas que quieren resultados reales.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-medium uppercase tracking-widest">Navegación</h4>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-sm font-medium uppercase tracking-widest">Contacto</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <span className="text-primary text-sm">@</span>
              <a href="mailto:coach@lionfitness.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                abelcontreras1994@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-sm">IG</span>
              <a href="https://www.instagram.com/lionfitness94/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-text-secondary text-sm hover:text-primary transition-colors">
                @lionfitness94
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-text-secondary text-xs">
          {`© ${new Date().getFullYear()} Lion Fitness · Todos los derechos reservados`}
        </p>
      </div>

    </footer>
  )
}

export default Footer