import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

const redirectPath = window.location.search.startsWith('?/') ? window.location.search.slice(1) : ''
if (redirectPath) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${basePath}${redirectPath}`)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
