function TrailerSection() {
  return (
    <section className="container py-5" id="trailer">
      <div className="promo-panel">
        <div className="text-center mb-4">
          <p className="section-kicker">OFFICIAL TRAILER</p>
          <h2 className="section-title">Mira el adelanto del horror</h2>
          <p className="section-description">
            Presenta esta sección como el vídeo principal de promoción del juego.
          </p>
        </div>

        <div className="video-frame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Resident Evil Requiem Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default TrailerSection