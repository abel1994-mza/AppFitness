import ContactForm from "../components/Features/Contact/ContacFrom"

const Contact = () => {
  return (
    <section className="bg-bg py-20">
      <div className="w-full max-w-2xl mx-auto px-6">
        <p className="text-primary font-display mb-2">Contacto</p>
        <h1 className="text-white text-3xl font-body mb-10">Hablemos</h1>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact