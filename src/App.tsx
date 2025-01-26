
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Work from './pages/work'
import Footer from './components/footer'

function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <About />
      <Work />
      <Contact />
 <Footer />

    </div>
  )
}

export default App
