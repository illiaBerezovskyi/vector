import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SystemGrid from './components/SystemGrid.jsx'
import WhatWeChange from './components/WhatWeChange.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Calculator from './components/Calculator.jsx'
import Faq from './components/Faq.jsx'
import Contacts from './components/Contacts.jsx'
import Requisites from './components/Requisites.jsx'
import Footer from './components/Footer.jsx'
import Offer from './components/Offer.jsx'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isOffer = hash === '#/offer'

  useEffect(() => {
    if (isOffer) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [isOffer])

  if (isOffer) {
    return <Offer />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SystemGrid />
        <WhatWeChange />
        <Services />
        <Process />
        <Calculator />
        <Faq />
        <Contacts />
        <Requisites />
      </main>
      <Footer />
    </>
  )
}
