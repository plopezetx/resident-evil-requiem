import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="container py-5 text-center">
      <h1 className="section-title mb-3">404</h1>
      <p className="mb-4">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-danger">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage