const services = [
  {
    num: '01',
    title: 'CRM-архітектура та процеси продажів',
    text: 'Структура воронки, етапи та статуси угод, автозадачі, права доступу й контроль якості лідів — і вчимо команду працювати в системі, а не в нотатках.',
  },
  {
    num: '02',
    title: 'Рекламні кампанії та лідогенерація',
    text: 'План запуску кампаній, UTM-розмітка, базова аналітика та логіка передачі лідів: ви бачите, який канал приносить ліди і скільки коштує кожен.',
  },
  {
    num: '03',
    title: 'AI-асистенти та автоматизація',
    text: 'Сценарії асистентів, шаблони відповідей, автоматизація задач і кваліфікації лідів — рутина йде до роботів, менеджери продають.',
  },
  {
    num: '04',
    title: 'Дашборди та звітність',
    text: 'Дашборди, регулярні звіти, метрики продажів, контроль реклами й відстеження конверсій — все на одному екрані.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">03</span>
          <h2>Послуги</h2>
          <p>Працюємо модульно: можна взяти все разом або почати з одного блоку.</p>
        </div>
        <div className="services__grid stagger reveal">
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
