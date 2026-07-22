const items = [
  {
    tag: 'CRM',
    title: 'Lead management',
    text: 'Every request is captured, assigned and taken to a closed deal — nothing gets lost.',
  },
  {
    tag: 'ADS',
    title: 'Traffic',
    text: 'Ad campaigns with UTM tracking and a clear cost per lead for every channel.',
  },
  {
    tag: 'AI',
    title: 'Automation',
    text: 'AI assistants and workflows that take routine off your managers and reply to clients 24/7.',
  },
  {
    tag: 'BI',
    title: 'Analytics',
    text: 'Dashboards with the key metrics: from ad spend to revenue per manager.',
  },
]

export default function SystemGrid() {
  return (
    <section className="system">
      <div className="container">
        <div className="section-head">
          <span className="section-num">01</span>
          <h2>One system instead of scattered tools</h2>
          <p>
            CRM, ads, AI and analytics stay in sync — data flows between
            channels without manual copy-pasting.
          </p>
        </div>
        <div className="system__grid">
          {items.map((it) => (
            <div key={it.tag} className="system__card">
              <div className="system__tag">{it.tag}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
