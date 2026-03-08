import { apiFetch } from './apiClient'

export async function getAllNews() {
  return apiFetch('/news')
}

export async function getNewsById(id) {
  return apiFetch(`/news/${id}`)
}

export async function createNews(newsData) {
  return apiFetch('/news', {
    method: 'POST',
    body: JSON.stringify(newsData),
  })
}

export async function updateNews(id, newsData) {
  return apiFetch(`/news/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newsData),
  })
}

export async function deleteNews(id) {
  return apiFetch(`/news/${id}`, {
    method: 'DELETE',
  })
}