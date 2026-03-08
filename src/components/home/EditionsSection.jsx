function EditionsSection() {
  const editions = [
    {
      name: 'Standard Edition',
      price: '69,99€',
      items: ['Juego base', 'Acceso digital', 'Contenido promocional'],
    },
    {
      name: 'Deluxe Edition',
      price: '89,99€',
      items: ['Juego base', 'Skins exclusivas', 'Banda sonora digital'],
    },
    {
      name: 'Collector Edition',
      price: '149,99€',
      items: ['Juego base', 'Steelbook', 'Figura exclusiva', 'Artbook'],
    },
  ]

  return (
    <section className="container py-5" id="editions">
      <div className="text-center mb-5">
        <p className="section-kicker">EDITIONS</p>
        <h2 className="section-title">Elige tu edición</h2>
      </div>

      <div className="row g-4">
        {editions.map((edition) => (
          <div key={edition.name} className="col-12 col-md-6 col-lg-4">
            <div className="edition-card h-100">
              <h3>{edition.name}</h3>
              <p className="edition-price">{edition.price}</p>

              <ul className="edition-list">
                {edition.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button className="btn btn-danger w-100">Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EditionsSection