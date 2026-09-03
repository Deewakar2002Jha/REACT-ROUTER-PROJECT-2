import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
