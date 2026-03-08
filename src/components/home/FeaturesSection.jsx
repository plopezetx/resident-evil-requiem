function FeaturesSection() {
  const features = [
    {
      title: 'Terror inmersivo',
      text: 'Una ambientación opresiva, luces mínimas y tensión constante en cada rincón.',
    },
    {
      title: 'Exploración narrativa',
      text: 'Descubre documentos, pistas y secretos que reconstruyen una historia inquietante.',
    },
    {
      title: 'Supervivencia real',
      text: 'Gestiona munición, recursos y rutas de escape en situaciones límite.',
    },
  ]

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <p className="section-kicker">FEATURES</p>
        <h2 className="section-title">Una experiencia de horror total</h2>
      </div>

      <div className="row g-4">
        {features.map((feature) => (
          <div key={feature.title} className="col-12 col-md-6 col-lg-4">
            <div className="feature-card h-100">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection