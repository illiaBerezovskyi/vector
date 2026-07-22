import { useEffect, useState } from 'react'

const links = [
  { href: '#services', label: 'Послуги' },
  { href: '#process', label: 'Процес' },
  { href: '#calculator', label: 'Калькулятор' },
  { href: '#contacts', label: 'Контакти' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo">
          Vektor<span className="logo__dot">.</span>
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacts" className="btn btn--primary header__cta">
          Замовити послугу
        </a>
        <button
          className="burger"
          aria-label="Меню"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
