const contacts = [
  {
    label: 'Telegram',
    value: '@dzhugan_d',
    href: 'https://t.me/dzhugan_d',
    note: 'Найшвидший спосіб звʼязку',
  },
  {
    label: 'Телефон',
    value: '+38 (050) 865-71-20',
    href: 'tel:+380508657120',
    note: 'Дзвінки та Viber',
  },
  {
    label: 'Email',
    value: 'dzugan830@gmail.com',
    href: 'mailto:dzugan830@gmail.com',
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
