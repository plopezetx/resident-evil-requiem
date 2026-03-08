function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="hero-content col-12 col-lg-7">
          <p className="hero-tag">SURVIVAL HORROR REBORN</p>
          <h1 className="hero-title">Resident Evil Requiem</h1>
          <p className="hero-text">
            Una nueva pesadilla emerge entre ruinas, sombras y recuerdos infectados.
            Explora un mundo devastado, enfréntate a horrores inimaginables y sobrevive
            a la experiencia más intensa de la saga.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a href="#trailer" className="btn btn-danger btn-lg">
              Ver trailer
            </a>
            <a href="#editions" className="btn btn-outline-light btn-lg">
              Ver ediciones
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection