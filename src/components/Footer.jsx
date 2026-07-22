export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo logo--footer">
            Vektor<span className="logo__dot">.</span>
          </a>
          <p className="footer__tagline">
            CRM, реклама, AI та аналітика для підприємців і команд, які хочуть
            бачити продажі в цифрах.
          </p>
        </div>
        <nav className="footer__nav">
          <a href="#services">Послуги</a>
          <a href="#process">Процес</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакти</a>
          <a href="#/offer">Публічна оферта</a>
        </nav>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} ФОП Мельничук Роман Петрович. Всі права захищені.</p>
      </div>
    </footer>
  )
}
