function GalleryPage() {
  return (
    <section className="container py-5">
      <h1 className="section-title mb-4">Galería</h1>
      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-12 col-sm-6 col-lg-4">
            <div className="gallery-item">
              <span>Imagen {item}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage