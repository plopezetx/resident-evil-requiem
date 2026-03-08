import { useForm } from 'react-hook-form'
import { useState } from 'react'

function NewsletterSection() {
  const { register, handleSubmit, reset } = useForm()
  const [message, setMessage] = useState('')

  const onSubmit = (data) => {
    console.log('Newsletter:', data)
    setMessage('Te has suscrito correctamente.')
    reset()
  }

  return (
    <section className="container py-5">
      <div className="newsletter-panel text-center">
        <p className="section-kicker">NEWSLETTER</p>
        <h2 className="section-title">Recibe las últimas noticias</h2>
        <p className="section-description">
          Suscríbete para recibir novedades, avances y contenido exclusivo.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="newsletter-form mx-auto mt-4"
        >
          <div className="row g-3">
            <div className="col-12 col-md-8">
              <input
                type="email"
                className="form-control"
                placeholder="Introduce tu correo"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-12 col-md-4">
              <button className="btn btn-danger w-100" type="submit">
                Suscribirme
              </button>
            </div>
          </div>
        </form>

        {message && <p className="mt-3 text-success">{message}</p>}
      </div>
    </section>
  )
}

export default NewsletterSection