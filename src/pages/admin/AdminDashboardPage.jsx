import AdminLayout from '../../components/admin/AdminLayout'

function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="section-title mb-4">Dashboard de administración</h1>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feature-card h-100">
              <h3>Gestión de noticias</h3>
              <p>
                Crea, edita y elimina noticias promocionales del videojuego.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="feature-card h-100">
              <h3>Gestión de personajes</h3>
              <p>
                Administra personajes principales y secundarios del juego.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="feature-card h-100">
              <h3>Panel profesional</h3>
              <p>
                Estructura modular con rutas protegidas, componentes reutilizables y servicios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboardPage