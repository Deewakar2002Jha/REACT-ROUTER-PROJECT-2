import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
