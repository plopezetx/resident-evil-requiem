import { create } from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  role: null,

  login: ({ email, role }) =>
    set({
      user: { email },
      token: 'fake-jwt-token',
      role,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
      role: null,
    }),
}))

export default useAuthStore