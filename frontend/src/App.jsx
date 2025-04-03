import React from 'react'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1 className='bg-green-500 text-white'>This is sujalsubedi and git hub works</h1>
      <Outlet />
    </div>
  )
}

export default App
