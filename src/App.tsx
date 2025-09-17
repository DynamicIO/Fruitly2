import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import DeliveryEvents from './components/DeliveryEvents'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Initialize theme from localStorage on first load
    const stored = localStorage.getItem('theme')
    const root = document.documentElement
    if (stored === 'dark') root.classList.add('dark')
    if (stored === 'light') root.classList.remove('dark')
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <DeliveryEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

