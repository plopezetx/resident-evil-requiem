import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'
import { loginUser } from '../../services/authService'
import { USER_ROLES } from '../../utils/constants'

function LoginPage() {
  const { register, handleSubmit } = useForm()
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      setErrorMessage('')

      const result = await loginUser(data.email, data.password)

      login(result)

      if (result.user.role === USER_ROLES.ADMIN) {
        navigate('/admin')
      } else {
        navigate('/profile')
      }
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="login-card">
            <h1 className="section-title mb-4 text-center">Iniciar sesión</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="admin@requiem.com"
                  {...register('email', { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="123456"
                  {...register('password', { required: true })}
                />
              </div>

              {errorMessage && (
                <div className="alert alert-danger py-2" role="alert">
                  {errorMessage}
                </div>
              )}

              <button type="submit" className="btn btn-danger w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-4 small text-light-emphasis">
              <p className="mb-1">Demo admin: admin@requiem.com / 123456</p>
              <p className="mb-0">Demo user: user@requiem.com / 123456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage