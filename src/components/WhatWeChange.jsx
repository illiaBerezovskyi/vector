const points = [
  {
    title: 'Прозора воронка',
    text: 'Кожен лід має джерело, статус, відповідального та наступний крок — одразу видно, де що зависло.',
  },
  {
    title: 'Керована реклама',
    text: 'Кампанії з логікою, метриками та аналітикою — а не «запустили і чекаємо».',
  },
  {
    title: 'Менше ручної роботи',
    text: 'Автоматизація знімає рутину: нагадування, відповіді та звіти збираються самі.',
  },
]

export default function WhatWeChange() {
  return (
    <section className="change">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">02</span>
          <h2>Що змінюємо</h2>
          <p>Три речі, які клієнти помічають уже в перший місяць роботи.</p>
        </div>
        <div className="change__grid stagger reveal">
          {points.map((p) => (
            <div key={p.title} className="change__card">
              <span className="change__check">✓</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
