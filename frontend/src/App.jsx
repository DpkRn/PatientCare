import React from 'react'
import Dashboard from './pages/Dashboard'
import AuthPage from './pages/AuthPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>

    </div>
  )
}

export default App