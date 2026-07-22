import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SystemGrid from './components/SystemGrid.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Calculator from './components/Calculator.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import Offer from './components/Offer.jsx'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (hash === '#/offer') {
    return <Offer />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SystemGrid />
        <Services />
        <Process />
        <Calculator />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
