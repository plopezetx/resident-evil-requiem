import { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminCharactersForm from '../../components/admin/AdminCharactersForm'
import AdminCharactersList from '../../components/admin/AdminCharactersList'
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  updateCharacter,
} from '../../services/charactersService'

function AdminCharactersPage() {
  const [characters, setCharacters] = useState([])
  const [loadingCharacters, setLoadingCharacters] = useState(true)
  const [loadingError, setLoadingError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [editingCharacter, setEditingCharacter] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeletingId, setIsDeletingId] = useState(null)

  const loadCharacters = async () => {
    try {
      setLoadingCharacters(true)
      setLoadingError('')
      const data = await getAllCharacters()
      setCharacters(data)
    } catch (error) {
      setLoadingError(error.message || 'No se pudieron cargar los personajes')
    } finally {
      setLoadingCharacters(false)
    }
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  const clearMessages = () => {
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleSubmitCharacter = async (formData, reset) => {
    try {
      setIsSubmitting(true)
      clearMessages()

      if (editingCharacter) {
        await updateCharacter(editingCharacter.id, {
          ...editingCharacter,
          name: formData.name,
          role: formData.role,
        })
        setSuccessMessage('Personaje actualizado correctamente')
        setEditingCharacter(null)
      } else {
        await createCharacter({
          name: formData.name,
          role: formData.role,
        })
        setSuccessMessage('Personaje creado correctamente')
      }

      reset()
      await loadCharacters()
    } catch (error) {
      setErrorMessage(error.message || 'No se pudo guardar el personaje')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (character) => {
    clearMessages()
    setEditingCharacter(character)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    clearMessages()
    setEditingCharacter(null)
  }

  const handleDelete = async (id) => {
    try {
      setIsDeletingId(id)
      clearMessages()

      await deleteCharacter(id)
      setSuccessMessage('Personaje eliminado correctamente')

      if (editingCharacter && editingCharacter.id === id) {
        setEditingCharacter(null)
      }

      await loadCharacters()
    } catch (error) {
      setErrorMessage(error.message || 'No se pudo eliminar el personaje')
    } finally {
      setIsDeletingId(null)
    }
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="section-title mb-4">Gestión de personajes</h1>

        <div className="row g-4">
          <div className="col-12 col-xl-5">
            <AdminCharactersForm
              onSubmitCharacter={handleSubmitCharacter}
              editingCharacter={editingCharacter}
              onCancelEdit={handleCancelEdit}
              isSubmitting={isSubmitting}
              successMessage={successMessage}
              errorMessage={errorMessage}
            />
          </div>

          <div className="col-12 col-xl-7">
            {loadingCharacters ? (
              <div className="login-card">
                <p className="mb-0">Cargando personajes...</p>
              </div>
            ) : loadingError ? (
              <div className="login-card">
                <p className="text-danger mb-0">{loadingError}</p>
              </div>
            ) : (
              <AdminCharactersList
                characters={characters}
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

export default AdminCharactersPage