import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');

if (redirect) {
  window.history.replaceState(null, '', '/portfolio' + redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
