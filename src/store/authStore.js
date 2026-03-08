import { create } from 'zustand'

const savedUser = localStorage.getItem('user')
const savedToken = localStorage.getItem('token')
const savedRole = localStorage.getItem('role')

const useAuthStore = create((set) => ({
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken || null,
  role: savedRole || null,

  login: ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('role', user.role)

    set({
      user,
      token,
      role: user.role,
    })
  },

  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('role')

    set({
      user: null,
      token: null,
      role: null,
    })
  },
}))

export default useAuthStore