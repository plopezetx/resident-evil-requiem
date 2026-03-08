import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function AdminCharactersForm({
  onSubmitCharacter,
  editingCharacter,
  onCancelEdit,
  isSubmitting,
  successMessage,
  errorMessage,
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      role: '',
    },
  })

  useEffect(() => {
    if (editingCharacter) {
      reset({
        name: editingCharacter.name || '',
        role: editingCharacter.role || '',
      })
    } else {
      reset({
        name: '',
        role: '',
      })
    }
  }, [editingCharacter, reset])

  const onSubmit = (data) => {
    onSubmitCharacter(data, reset)
  }

  return (
    <div className="login-card">
      <h2 className="mb-4">
        {editingCharacter ? 'Editar personaje' : 'Crear personaje'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del personaje"
            {...register('name', { required: true })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rol</label>
          <input
            type="text"
            className="form-control"
            placeholder="Rol del personaje"
            {...register('role', { required: true })}
          />
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
              ? editingCharacter
                ? 'Guardando cambios...'
                : 'Creando personaje...'
              : editingCharacter
                ? 'Guardar cambios'
                : 'Crear personaje'}
          </button>

          {editingCharacter && (
            <button type="button" className="btn btn-outline-light" onClick={onCancelEdit}>
              Cancelar edición
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default AdminCharactersForm