import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/authService'

function RegisterPage() {
  const { register, handleSubmit, watch, reset } = useForm()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const passwordValue = watch('password')

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      setErrorMessage('')
      setSuccessMessage('')

      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      setSuccessMessage('Usuario registrado correctamente. Ahora puedes iniciar sesión.')
      reset()

      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch (error) {
      setErrorMessage(error.message || 'No se pudo registrar el usuario')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="login-card">
            <h1 className="section-title mb-4 text-center">Registro</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                  {...register('name', { required: 'El nombre es obligatorio' })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="tuemail@correo.com"
                  {...register('email', { required: 'El email es obligatorio' })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Introduce una contraseña"
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                  })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repite la contraseña"
                  {...register('confirmPassword', {
                    required: 'Debes confirmar la contraseña',
                    validate: (value) =>
                      value === passwordValue || 'Las contraseñas no coinciden',
                  })}
                />
              </div>

              {successMessage && (
                <div className="alert alert-success py-2" role="alert">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="alert alert-danger py-2" role="alert">
                  {errorMessage}
                </div>
              )}

              <button type="submit" className="btn btn-danger w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Registrando...' : 'Crear cuenta'}
              </button>
            </form>

            <p className="mt-4 mb-0 text-center text-light-emphasis">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage