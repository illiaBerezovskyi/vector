import { useState } from 'react'

const fmt = new Intl.NumberFormat('uk-UA')

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
        <div className="section-head reveal">
          <span className="section-num">05</span>
          <h2>Скільки ви втрачаєте без системи</h2>
          <p>
            Посуньте повзунки під свої цифри. Модель показує ефект від зростання
            конверсії на +8 в.п. — середній результат наших клієнтів.
          </p>
        </div>
        <div className="calc__panel reveal">
          <div className="calc__controls">
            <label className="calc__field">
              <div className="calc__label">
                <span>Лідів на місяць</span>
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
                <span>Конверсія в угоду</span>
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
                <span>Середній чек</span>
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
              <span>Угод зараз</span>
              <strong>{fmt.format(deals)}</strong>
            </div>
            <div className="calc__row">
              <span>Виручка зараз</span>
              <strong>${fmt.format(revenue)}</strong>
            </div>
            <div className="calc__divider" />
            <div className="calc__row calc__row--accent">
              <span>Угод із системою</span>
              <strong>{fmt.format(improvedDeals)}</strong>
            </div>
            <div className="calc__row calc__row--accent">
              <span>Виручка із системою</span>
              <strong>${fmt.format(improvedRevenue)}</strong>
            </div>
            <div className="calc__delta">
              +${fmt.format(delta)} <span>на місяць</span>
            </div>
            <a href="#contacts" className="btn btn--primary btn--block">
              Хочу такий результат <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
