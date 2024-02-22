import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { ChatProvider } from './context/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
<ChatProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ChatProvider>

  </AuthProvider>
)
