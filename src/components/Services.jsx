const services = [
  {
    num: '01',
    title: 'CRM architecture & sales processes',
    text: 'We set up funnels, deal stages, auto-tasks and access rights — and teach your team to work in the system, not in sticky notes.',
  },
  {
    num: '02',
    title: 'Ad campaigns & lead generation',
    text: 'We launch and manage ads with UTM tracking: you see which channel brings leads and what every single one costs.',
  },
  {
    num: '03',
    title: 'AI assistants & automation',
    text: 'Lead qualification flows, auto-replies, document templates — routine goes to the robots while managers sell.',
  },
  {
    num: '04',
    title: 'Dashboards & reporting',
    text: 'We turn raw data into clear dashboards: conversions, revenue, ad performance — everything on one screen.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2>Services</h2>
          <p>We work in modules: take the full stack or start with a single block.</p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-card__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contacts" className="service-card__link">
                Discuss your project <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
