import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function AdminNewsForm({
  onSubmitNews,
  editingNews,
  onCancelEdit,
  isSubmitting,
  successMessage,
  errorMessage,
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      text: '',
    },
  })

  useEffect(() => {
    if (editingNews) {
      reset({
        title: editingNews.title || '',
        text: editingNews.text || '',
      })
    } else {
      reset({
        title: '',
        text: '',
      })
    }
  }, [editingNews, reset])

  const onSubmit = (data) => {
    onSubmitNews(data, reset)
  }

  return (
    <div className="login-card">
      <h2 className="mb-4">{editingNews ? 'Editar noticia' : 'Crear noticia'}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título de la noticia"
            {...register('title', { required: true })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Contenido de la noticia"
            {...register('text', { required: true })}
          ></textarea>
        </div>

        {successMessage && (
          <div className="alert alert-success py-2" role="alert">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-danger py-2" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="d-flex gap-2 flex-wrap">
          <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
            {isSubmitting
              ? editingNews
                ? 'Guardando cambios...'
                : 'Creando noticia...'
              : editingNews
                ? 'Guardar cambios'
                : 'Crear noticia'}
          </button>

          {editingNews && (
            <button type="button" className="btn btn-outline-light" onClick={onCancelEdit}>
              Cancelar edición
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default AdminNewsForm