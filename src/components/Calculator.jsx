import { useState } from 'react'

const fmt = new Intl.NumberFormat('en-US')

export default function Calculator() {
  const [leads, setLeads] = useState(200)
  const [conversion, setConversion] = useState(12)
  const [check, setCheck] = useState(1500)

  const deals = Math.round((leads * conversion) / 100)
  const revenue = deals * check
  const improvedDeals = Math.round((leads * Math.min(conversion + 8, 100)) / 100)
  const improvedRevenue = improvedDeals * check
  const delta = improvedRevenue - revenue

  return (
    <section className="calc" id="calculator">
      <div className="container">
        <div className="section-head">
          <span className="section-num">04</span>
          <h2>How much you lose without a system</h2>
          <p>
            Drag the sliders to match your numbers. The model shows the effect
            of a +8 pp conversion lift — the average result across our clients.
          </p>
        </div>
        <div className="calc__panel">
          <div className="calc__controls">
            <label className="calc__field">
              <div className="calc__label">
                <span>Leads per month</span>
                <strong>{fmt.format(leads)}</strong>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={leads}
                onChange={(e) => setLeads(+e.target.value)}
              />
            </label>
            <label className="calc__field">
              <div className="calc__label">
                <span>Lead-to-deal conversion</span>
                <strong>{conversion}%</strong>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={conversion}
                onChange={(e) => setConversion(+e.target.value)}
              />
            </label>
            <label className="calc__field">
              <div className="calc__label">
                <span>Average deal size</span>
                <strong>${fmt.format(check)}</strong>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={check}
                onChange={(e) => setCheck(+e.target.value)}
              />
            </label>
          </div>
          <div className="calc__results">
            <div className="calc__row">
              <span>Deals now</span>
              <strong>{fmt.format(deals)}</strong>
            </div>
            <div className="calc__row">
              <span>Revenue now</span>
              <strong>${fmt.format(revenue)}</strong>
            </div>
            <div className="calc__divider" />
            <div className="calc__row calc__row--accent">
              <span>Deals with the system</span>
              <strong>{fmt.format(improvedDeals)}</strong>
            </div>
            <div className="calc__row calc__row--accent">
              <span>Revenue with the system</span>
              <strong>${fmt.format(improvedRevenue)}</strong>
            </div>
            <div className="calc__delta">
              +${fmt.format(delta)} <span>per month</span>
            </div>
            <a href="#contacts" className="btn btn--primary btn--block">
              I want this result <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
