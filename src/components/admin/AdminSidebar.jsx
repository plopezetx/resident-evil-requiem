import { NavLink } from 'react-router-dom'

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-sidebar__title">Admin Panel</h2>

      <nav className="admin-sidebar__nav">
        <NavLink to="/admin" end className="admin-sidebar__link">
          Dashboard
        </NavLink>

        <NavLink to="/admin/news" className="admin-sidebar__link">
          Noticias
        </NavLink>

        <NavLink to="/admin/characters" className="admin-sidebar__link">
          Personajes
        </NavLink>
      </nav>
    </aside>
  )
}

export default AdminSidebar