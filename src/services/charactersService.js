import { apiFetch } from './apiClient'

export async function getAllCharacters() {
  return apiFetch('/characters')
}

export async function getCharacterById(id) {
  return apiFetch(`/characters/${id}`)
}

export async function createCharacter(characterData) {
  return apiFetch('/characters', {
    method: 'POST',
    body: JSON.stringify(characterData),
  })
}

export async function updateCharacter(id, characterData) {
  return apiFetch(`/characters/${id}`, {
    method: 'PUT',
    body: JSON.stringify(characterData),
  })
}

export async function deleteCharacter(id) {
  return apiFetch(`/characters/${id}`, {
    method: 'DELETE',
  })
}