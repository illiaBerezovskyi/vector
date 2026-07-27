import { useState } from 'react'

const terms = [
  {
    title: 'Оплата',
    text: 'Рахунок після узгодження обсягу робіт. Оплата у гривні (UAH) банківським переказом.',
  },
  {
    title: 'Надання послуг',
    text: 'Цифрові послуги надаються дистанційно після оплати.',
  },
  {
    title: 'Повернення',
    text: 'Розглядається індивідуально з урахуванням фактично виконаних робіт.',
  },
]

const rows = [
  { label: 'Одержувач', value: 'ФОП ДЖУГАН ДЕНИС СЕРГІЙОВИЧ', copy: true },
  { label: 'ЄДРПОУ / РНОКПП', value: '3879003812', copy: true },
  { label: 'Банк', value: 'АТ «УНІВЕРСАЛ БАНК»', copy: true },
  { label: 'Код ЄДРПОУ банку', value: '21133352', copy: true },
  { label: 'Код банку (МФО)', value: '322001', copy: true },
  { label: 'Валюта', value: 'UAH' },
  {
    label: 'Адреса',
    value: 'Україна, 62418, Харківська обл., смт. Пісочин, вул. Європейська, буд. 2, кв. 108',
    copy: true,
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
        <div className="section-head reveal">
          <span className="section-num">08</span>
          <h2>Оплата і реквізити</h2>
          <p>Дані для оплати банківським переказом.</p>
        </div>
        <div className="req__terms stagger reveal">
          {terms.map((t) => (
            <div key={t.title} className="req__term">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
        <div className="req__panel reveal">
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
