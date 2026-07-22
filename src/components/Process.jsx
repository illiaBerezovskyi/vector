const steps = [
  {
    num: '1',
    title: 'Brief & goals',
    text: 'We hop on a call, capture your current numbers and set goals for the next 3 months.',
  },
  {
    num: '2',
    title: 'Audit',
    text: 'We dissect your funnel, ads and processes to find where leads and money leak.',
  },
  {
    num: '3',
    title: 'Setup',
    text: 'We implement the CRM, launch the ads, plug in AI and build the dashboards.',
  },
  {
    num: '4',
    title: 'Handover & support',
    text: 'We train your team, hand over the docs and stay around for support.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head">
          <span className="section-num">03</span>
          <h2>How we work</h2>
          <p>Fully remote, with documented results at every stage.</p>
        </div>
        <div className="process__grid">
          {steps.map((s) => (
            <div key={s.num} className="process__step">
              <div className="process__circle">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
