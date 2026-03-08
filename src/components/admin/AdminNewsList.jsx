function AdminNewsList({ news, onEdit, onDelete, isDeletingId }) {
  return (
    <div className="login-card">
      <h2 className="mb-4">Listado de noticias</h2>

      {!news.length ? (
        <p className="mb-0">No hay noticias registradas.</p>
      ) : (
        <div className="row g-3">
          {news.map((item) => (
            <div key={item.id} className="col-12">
              <div className="admin-news-card">
                <div className="admin-news-card__content">
                  <p className="news-date mb-2">{item.date}</p>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="mb-0">{item.text}</p>
                </div>

                <div className="admin-news-card__actions">
                  <button className="btn btn-outline-light btn-sm" onClick={() => onEdit(item)}>
                    Editar
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(item.id)}
                    disabled={isDeletingId === item.id}
                  >
                    {isDeletingId === item.id ? 'Borrando...' : 'Eliminar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminNewsList