import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

function Header() {
  const { user, role, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark container py-3">
        <Link className="navbar-brand brand-title" to="/">
          RESIDENT EVIL REQUIEM
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/characters">
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Galería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">
                Noticias
              </NavLink>
            </li>

            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Registro
                  </NavLink>
                </li>
              </>
            )}

            {user && role === 'user' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Perfil
                </NavLink>
              </li>
            )}

            {user && role === 'admin' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <button className="btn btn-danger ms-lg-3 mt-2 mt-lg-0" onClick={handleLogout}>
                  Salir
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header