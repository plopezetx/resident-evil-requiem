import useFetch from '../../hooks/useFetch'
import { getAllCharacters } from '../../services/charactersService'

function CharactersPage() {
  const { data: characters, loading, error } = useFetch(getAllCharacters, [])

  return (
    <section className="container py-5">
      <h1 className="section-title mb-4">Personajes</h1>

      {loading && <p>Cargando personajes...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="row g-4">
          {characters.map((character) => (
            <div key={character.id} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card h-100">
                <h3>{character.name}</h3>
                <p>{character.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default CharactersPage