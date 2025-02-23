import React from 'react'
import Index from './views/index.jsx'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default App