import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SystemGrid from './components/SystemGrid.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Calculator from './components/Calculator.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
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
