export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="logo logo--footer">
          Vektor<span className="logo__dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Vektor Agency. All rights reserved.</p>
        <nav className="footer__nav">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contacts">Contacts</a>
          <a href="#/offer">Public Offer</a>
        </nav>
      </div>
    </footer>
  )
}
