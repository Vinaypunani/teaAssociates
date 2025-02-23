import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './views/Signup'
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App