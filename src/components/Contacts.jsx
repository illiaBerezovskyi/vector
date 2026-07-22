const contacts = [
  {
    label: 'Telegram',
    value: '@vektor_agency',
    href: 'https://t.me/vektor_agency',
    note: 'We reply within an hour',
  },
  {
    label: 'Phone',
    value: '+1 (555) 000-0000',
    href: 'tel:+15550000000',
    note: 'Mon–Fri, 10 am – 7 pm',
  },
  {
    label: 'Email',
    value: 'hello@vektor.agency',
    href: 'mailto:hello@vektor.agency',
    note: 'For briefs and documents',
  },
]

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="section-head">
          <span className="section-num">05</span>
          <h2>Contacts</h2>
          <p>Drop us a line — we'll come back with brief questions and a timeline.</p>
        </div>
        <div className="contacts__grid">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} className="contact-card">
              <div className="contact-card__label">{c.label}</div>
              <div className="contact-card__value">{c.value}</div>
              <div className="contact-card__note">{c.note}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
