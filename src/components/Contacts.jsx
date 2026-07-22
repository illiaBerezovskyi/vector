const contacts = [
  {
    label: 'Telegram',
    value: '@roma00q',
    href: 'https://t.me/roma00q',
    note: 'Відповідаємо протягом години',
  },
  {
    label: 'Телефон',
    value: '+38 (091) 481-17-91',
    href: 'tel:+380914811791',
    note: 'Пн–Пт, 10:00–19:00',
  },
  {
    label: 'Email',
    value: 'guteroma555@gmail.com',
    href: 'mailto:guteroma555@gmail.com',
    note: 'Для брифів і документів',
  },
]

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="section-head">
          <span className="section-num">05</span>
          <h2>Контакти</h2>
          <p>Напишіть нам — повернемось із питаннями по брифу та пропозицією по строках.</p>
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
