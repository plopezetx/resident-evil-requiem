import img1 from '../../assets/images/img2.png'
import img2 from '../../assets/images/img3.png'
import img3 from '../../assets/images/img4.png'
import img4 from '../../assets/images/img5.png'
import img5 from '../../assets/images/img6.png'
import img6 from '../../assets/images/img7.png'

const images = [img1, img2, img3, img4, img5, img6]

function GalleryPage() {
  return (
    <section className="container py-5">
      <h1 className="section-title mb-4">Galería</h1>
      <div className="row g-4">
      {images.map((image, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4">
          <div className="gallery-item">
            <img src={image} alt="Resident Evil scene" />
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default GalleryPage