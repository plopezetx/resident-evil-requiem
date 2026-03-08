function AdminCharactersList({ characters, onEdit, onDelete, isDeletingId }) {
  return (
    <div className="login-card">
      <h2 className="mb-4">Listado de personajes</h2>

      {!characters.length ? (
        <p className="mb-0">No hay personajes registrados.</p>
      ) : (
        <div className="row g-3">
          {characters.map((character) => (
            <div key={character.id} className="col-12">
              <div className="admin-news-card">
                <div className="admin-news-card__content">
                  <h3 className="mb-2">{character.name}</h3>
                  <p className="mb-0">{character.role}</p>
                </div>

                <div className="admin-news-card__actions">
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => onEdit(character)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(character.id)}
                    disabled={isDeletingId === character.id}
                  >
                    {isDeletingId === character.id ? 'Borrando...' : 'Eliminar'}
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

export default AdminCharactersList