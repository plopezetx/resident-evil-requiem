import useAuthStore from '../../store/authStore'

function ProfilePage() {
  const { user, role } = useAuthStore()

  return (
    <section className="container py-5">
      <h1 className="section-title mb-4">Perfil de usuario</h1>
      <div className="feature-card">
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Rol:</strong> {role}
        </p>
        <p className="mb-0">Bienvenido al área privada de usuario.</p>
      </div>
    </section>
  )
}

export default ProfilePage