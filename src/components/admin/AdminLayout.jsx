import AdminSidebar from './AdminSidebar'

function AdminLayout({ children }) {
  return (
    <section className="container py-5">
      <div className="admin-layout">
        <AdminSidebar />

        <div className="admin-layout__content">
          {children}
        </div>
      </div>
    </section>
  )
}

export default AdminLayout