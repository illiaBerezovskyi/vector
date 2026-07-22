const services = [
  {
    num: '01',
    title: 'CRM-архітектура та процеси продажів',
    text: 'Налаштовуємо воронки, етапи угод, автозадачі та права доступу — і вчимо команду працювати в системі, а не в нотатках.',
  },
  {
    num: '02',
    title: 'Рекламні кампанії та лідогенерація',
    text: 'Запускаємо та ведемо рекламу з UTM-розміткою: ви бачите, який канал приносить ліди і скільки коштує кожен.',
  },
  {
    num: '03',
    title: 'AI-асистенти та автоматизація',
    text: 'Сценарії кваліфікації лідів, автовідповіді, шаблони документів — рутина йде до роботів, менеджери продають.',
  },
  {
    num: '04',
    title: 'Дашборди та звітність',
    text: 'Збираємо аналітику в наочні дашборди: конверсії, виручка, ефективність реклами — все на одному екрані.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2>Послуги</h2>
          <p>Працюємо модульно: можна взяти все разом або почати з одного блоку.</p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-card__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contacts" className="service-card__link">
                Обговорити задачу <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
