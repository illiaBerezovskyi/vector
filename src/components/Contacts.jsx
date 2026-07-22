const contacts = [
  {
    label: 'Telegram',
    value: '@roma00q',
    href: 'https://t.me/roma00q',
    note: 'Найшвидший спосіб звʼязку',
  },
  {
    label: 'Телефон',
    value: '+38 (091) 481-17-91',
    href: 'tel:+380914811791',
    note: 'Дзвінки та Viber',
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
        <div className="section-head reveal">
          <span className="section-num">07</span>
          <h2>Контакти</h2>
          <p>
            Напишіть, що саме хочете впорядкувати: CRM, рекламу, AI чи
            аналітику — повернемось із питаннями по брифу та планом робіт.
          </p>
        </div>
        <div className="contacts__grid stagger reveal">
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
