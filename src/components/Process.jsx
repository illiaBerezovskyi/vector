const steps = [
  {
    num: '1',
    title: 'Бриф і цілі',
    text: 'Зідзвонюємось, фіксуємо поточні показники та ставимо цілі на 3 місяці.',
  },
  {
    num: '2',
    title: 'Аудит',
    text: 'Розбираємо воронку, рекламу та процеси. Знаходимо, де губляться ліди та гроші.',
  },
  {
    num: '3',
    title: 'Налаштування',
    text: 'Впроваджуємо CRM, запускаємо рекламу, підключаємо AI та збираємо дашборди.',
  },
  {
    num: '4',
    title: 'Передача та підтримка',
    text: 'Навчаємо команду, передаємо документацію та залишаємось на підтримці.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head">
          <span className="section-num">03</span>
          <h2>Як проходить робота</h2>
          <p>Повністю онлайн, з фіксацією результатів на кожному етапі.</p>
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
