import React from 'react'
import ReactDOM from 'react-dom/client'

// Routes
import AppRouter from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
