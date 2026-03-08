import { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminNewsForm from '../../components/admin/AdminNewsForm'
import AdminNewsList from '../../components/admin/AdminNewsList'
import {
  createNews,
  deleteNews,
  getAllNews,
  updateNews,
} from '../../services/newsService'

function AdminNewsPage() {
  const [news, setNews] = useState([])
  const [loadingNews, setLoadingNews] = useState(true)
  const [loadingError, setLoadingError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [editingNews, setEditingNews] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeletingId, setIsDeletingId] = useState(null)

  const loadNews = async () => {
    try {
      setLoadingNews(true)
      setLoadingError('')
      const data = await getAllNews()
      setNews(data)
    } catch (error) {
      setLoadingError(error.message || 'No se pudieron cargar las noticias')
    } finally {
      setLoadingNews(false)
    }
  }

  useEffect(() => {
    loadNews()
  }, [])

  const clearMessages = () => {
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleSubmitNews = async (formData, reset) => {
    try {
      setIsSubmitting(true)
      clearMessages()

      if (editingNews) {
        await updateNews(editingNews.id, {
          ...editingNews,
          title: formData.title,
          text: formData.text,
        })
        setSuccessMessage('Noticia actualizada correctamente')
        setEditingNews(null)
      } else {
        await createNews({
          title: formData.title,
          text: formData.text,
          date: new Date().toISOString().split('T')[0],
        })
        setSuccessMessage('Noticia creada correctamente')
      }

      reset()
      await loadNews()
    } catch (error) {
      setErrorMessage(error.message || 'No se pudo guardar la noticia')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (newsItem) => {
    clearMessages()
    setEditingNews(newsItem)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    clearMessages()
    setEditingNews(null)
  }

  const handleDelete = async (id) => {
    try {
      setIsDeletingId(id)
      clearMessages()

      await deleteNews(id)
      setSuccessMessage('Noticia eliminada correctamente')

      if (editingNews && editingNews.id === id) {
        setEditingNews(null)
      }

      await loadNews()
    } catch (error) {
      setErrorMessage(error.message || 'No se pudo eliminar la noticia')
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="section-title mb-4">Gestión de noticias</h1>

        <div className="row g-4">
          <div className="col-12 col-xl-5">
            <AdminNewsForm
              onSubmitNews={handleSubmitNews}
              editingNews={editingNews}
              onCancelEdit={handleCancelEdit}
              isSubmitting={isSubmitting}
              successMessage={successMessage}
              errorMessage={errorMessage}
            />
          </div>

          <div className="col-12 col-xl-7">
            {loadingNews ? (
              <div className="login-card">
                <p className="mb-0">Cargando noticias...</p>
              </div>
            ) : loadingError ? (
              <div className="login-card">
                <p className="text-danger mb-0">{loadingError}</p>
              </div>
            ) : (
              <AdminNewsList
                news={news}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isDeletingId={isDeletingId}
              />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminNewsPage