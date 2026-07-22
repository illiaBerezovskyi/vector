export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="logo logo--footer">
          Vektor<span className="logo__dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Vektor Agency. Всі права захищені.</p>
        <nav className="footer__nav">
          <a href="#services">Послуги</a>
          <a href="#process">Процес</a>
          <a href="#contacts">Контакти</a>
          <a href="#/offer">Публічна оферта</a>
        </nav>
      </div>
    </footer>
  )
}
