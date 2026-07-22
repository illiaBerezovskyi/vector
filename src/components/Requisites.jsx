import { useState } from 'react'

const rows = [
  { label: 'Одержувач', value: 'ФОП МЕЛЬНИЧУК РОМАН ПЕТРОВИЧ' },
  { label: 'ЄДРПОУ / РНОКПП', value: '3937013891', copy: true },
  { label: 'IBAN', value: 'UA273077700000026004011255941', copy: true },
  { label: 'Банк', value: 'АТ «А-БАНК»' },
  { label: 'Валюта', value: 'UAH' },
  {
    label: 'Адреса',
    value: 'Україна, 10001, Житомирська обл., м. Житомир, вул. Огієнка Івана, буд. 14, кв. 1',
  },
]

export default function Requisites() {
  const [copied, setCopied] = useState(null)

  const copyValue = async (row) => {
    let ok = false
    try {
      await navigator.clipboard.writeText(row.value)
      ok = true
    } catch {
      // clipboard API blocked (http / older browsers) — textarea fallback
      const ta = document.createElement('textarea')
      ta.value = row.value
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        ok = document.execCommand('copy')
      } catch {
        ok = false
      }
      ta.remove()
    }
    if (ok) {
      setCopied(row.label)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  return (
    <section className="req" id="requisites">
      <div className="container">
        <div className="section-head">
          <span className="section-num">06</span>
          <h2>Реквізити</h2>
          <p>Дані для оплати банківським переказом.</p>
        </div>
        <div className="req__panel">
          {rows.map((r) => (
            <div key={r.label} className="req__row">
              <span className="req__label">{r.label}</span>
              <span className="req__value">{r.value}</span>
              {r.copy && (
                <button className="req__copy" onClick={() => copyValue(r)}>
                  {copied === r.label ? 'Скопійовано ✓' : 'Копіювати'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
