import useFetch from '../../hooks/useFetch'
import { getAllNews } from '../../services/newsService'

function NewsPage() {
  const { data: news, loading, error } = useFetch(getAllNews, [])

  return (
    <section className="container py-5">
      <h1 className="section-title mb-4">Noticias</h1>

      {loading && <p>Cargando noticias...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="row g-4">
          {news.map((item) => (
            <div key={item.id} className="col-12 col-lg-6">
              <div className="feature-card h-100">
                <p className="news-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default NewsPage