import { apiFetch } from './apiClient'

export async function loginUser(email, password) {
  const users = await apiFetch(`/users?email=${encodeURIComponent(email.trim())}`)

  if (!users.length) {
    throw new Error('Credenciales incorrectas')
  }

  const user = users[0]

  if (user.password !== password.trim()) {
    throw new Error('Credenciales incorrectas')
  }

  return {
    token: `fake-token-${user.id}`,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  }
}

export async function registerUser({ name, email, password }) {
  const existingUsers = await apiFetch(`/users?email=${encodeURIComponent(email.trim())}`)

  if (existingUsers.length > 0) {
    throw new Error('Ya existe un usuario con ese correo')
  }

  const newUser = await apiFetch('/users', {
    method: 'POST',
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      role: 'user',
    }),
  })

  return newUser
}