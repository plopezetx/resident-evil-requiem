import { Routes, Route } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProtectedRoute from '../components/common/ProtectedRoute'

import HomePage from '../pages/public/HomePage'
import CharactersPage from '../pages/public/CharactersPage'
import GalleryPage from '../pages/public/GalleryPage'
import NewsPage from '../pages/public/NewsPage'
import LoginPage from '../pages/public/LoginPage'
import NotFoundPage from '../pages/public/NotFoundPage'
import RegisterPage from '../pages/public/RegisterPage'

import ProfilePage from '../pages/user/ProfilePage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminNewsPage from '../pages/admin/AdminNewsPage'
import AdminCharactersPage from '../pages/admin/AdminCharactersPage'

function AppRouter() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={['user', 'admin']}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/news"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminNewsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/characters"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminCharactersPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default AppRouter