import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tentang from './components/Tentang'
import Mitra from './components/Mitra'
import Testimoni from './components/Testimoni'
import Footer from './pages/Footer'
import "./App.css"
import "./index.css"

const App = () => {
  return (
    <div>
      {/* <Navbar />  */}
      <Home />
      <Tentang />
      <Mitra />
      <Testimoni />
      <Footer />
    </div>
  )
}

export default App
