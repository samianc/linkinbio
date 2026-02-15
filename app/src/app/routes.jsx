import React from 'react'
import HomePage from '../pages/HomePage.jsx'
import AlbumPage from '../pages/AlbumPage.jsx'
import AlbumDetailPage from '../pages/AlbumDetailPage.jsx'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/albums', element: <AlbumPage /> },
  { path: '/albums/:albumId', element: <AlbumDetailPage /> },
  { path: '*', element: <HomePage /> },
]

export default routes
