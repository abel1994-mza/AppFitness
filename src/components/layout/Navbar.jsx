import { Link } from "react-router-dom";
import marca from "/carpeta de cosas/Curso-de-programacion/WebFitness/src/assets/marca.png"
import { Menu,X } from "lucide-react";
import { useState } from "react";

const Navbar =()=>{
    const [open,setOpen] = useState(false)
    return(
            <nav className="relative z-50 flex justify-between items-center px-8 py-5 bg-surface">
      {/* LOGO */}
      <h2 className="font-bold flex items-center gap-1 font-display text-3xl text-white">
        <img
          className="h-10 hover:scale-125 transition-transform duration-200"
          src={marca}
          alt="logo"
        />
        <span>LION</span>
        <span className="text-primary">FITNESS</span>
      </h2>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 items-center">

        <Link className="text-text-secondary link-underline font-display" to="/">
          Inicio
        </Link>

        <Link className="text-text-secondary link-underline font-display" to="/contact">
          Contacto
        </Link>

        <Link className="text-text-secondary link-underline font-display" to="/about">
          Conoceme
        </Link>

        <Link className="text-text-secondary link-underline font-display" to="/training">
          Entrenamientos
        </Link>

        <button className="text-white border border-primary px-3 py-1 rounded-sm hover:bg-primary transition">
          Unirme
        </button>
      </div>

      {/* HAMBURGER BUTTON (MOBILE) */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-surface flex flex-col items-center gap-6 py-6 md:hidden border-t border-border text-white z-50">

          <Link  className="link-underline" onClick={() => setOpen(false)} to="/">
            Inicio
          </Link>

          <Link  className="link-underline" onClick={() => setOpen(false)} to="/contact">
            Contacto
          </Link>

          <Link  className="link-underline"  onClick={() => setOpen(false)} to="/about">
            Conoceme
          </Link>

          <Link  className="link-underline" onClick={() => setOpen(false)} to="/training">
            Entrenamientos
          </Link>

          <button className="text-white border border-primary px-3 py-1 rounded-sm hover:bg-primary transition">
            Unirme
          </button>

        </div>
      )}

    </nav>
  );
};

       

export default Navbar