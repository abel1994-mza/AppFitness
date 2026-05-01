

const About = () => {
  const stats = [
    { number: "10+", label: "Años en el fitness" },
    { number: "5+", label: "Años como atleta CrossFit" },
    { number: "31", label: "Años" },
  ]

  const valores = [
    {
      title: "Constancia",
      desc: "Los resultados no son inmediatos, pero son seguros si entrenas con propósito cada día.",
    },
    {
      title: "Aprendizaje continuo",
      desc: "Siempre en formación — del gimnasio tradicional al CrossFit, nunca dejo de aprender.",
    },
    {
      title: "Metodología real",
      desc: "Programación basada en educación física universitaria y años de experiencia práctica.",
    },
  ]

  return (
    <section className="bg-bg py-20">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col gap-20">

        {/* HERO — foto + texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Foto */}
          <div className="relative">
            <div className="absolute -inset-1 bg-primary opacity-20 rounded-2xl blur-xl" />
            <img
              src="./public/image/coach.jpg"
              alt="Coach Lion Fitness"
              className="relative rounded-2xl w-full object-cover aspect-[3/4] border border-border"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-primary font-display text-sm uppercase tracking-widest mb-2">
                Sobre mí
              </p>
              <h1 className="text-white text-4xl font-display leading-tight mb-4">
                Coach de CrossFit y Entrenador Personal
              </h1>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Soy argentino, tengo 31 años y llevo más de 8 años dentro del mundo del fitness. Mi camino empezó en el gimnasio tradicional, donde trabajé durante varios años como entrenador personal, y con el tiempo el CrossFit se convirtió en mi pasión y especialidad.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Durante más de 5 años fui atleta de CrossFit, lo que me dio una perspectiva única: sé lo que es entrenar desde adentro, no solo enseñarlo. Estudié Educación Física en la Universidad Jorge E. Coll, lo que me dio las bases científicas para diseñar programas que realmente funcionan.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Hoy combino lo mejor de ambos mundos — el gimnasio tradicional y el CrossFit — para ayudar a mis atletas a alcanzar resultados reales. Lion Fitness nació de esa filosofía: entrenar con cabeza, con método y con la mentalidad de un león.
              </p>
            </div>

            {/* Certificaciones */}
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm font-medium">Formación</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Licenciado en Educación Física — Univ. Jorge E. Coll",
                  "Coach de CrossFit certificado",
                  "Entrenador Personal",
                ].map((item, i) => (
                  <li key={i} className="text-text-secondary text-sm flex gap-2">
                    <span className="text-primary">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface py-10 flex flex-col items-center gap-2">
              <span className="text-primary text-4xl font-display">{stat.number}</span>
              <span className="text-text-secondary text-sm text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* VALORES */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-primary font-display text-sm uppercase tracking-widest">Mi filosofía</p>
            <h2 className="text-white text-3xl font-display">Lo que me define como coach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-primary transition-colors duration-300">
                <h3 className="text-white text-lg font-display">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About