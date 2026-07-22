const faqs = [
  {
    q: 'У якому форматі ви працюєте?',
    a: 'Повністю онлайн, по всій Україні. Комунікація в Telegram або на дзвінках, результати фіксуємо у зрозумілому форматі: структури, таблиці, налаштування, інструкції, записи зустрічей.',
  },
  {
    q: 'Чи можна замовити лише одну послугу?',
    a: 'Так. Працюємо модульно: можна взяти лише CRM, лише рекламу чи аналітику — або все разом як єдину систему.',
  },
  {
    q: 'Як формуються ціна та строки?',
    a: 'Після брифу й аудиту: оцінюємо обсяг робіт, узгоджуємо вартість і графік до старту. Оплата за рахунком, без прихованих платежів.',
  },
  {
    q: 'Що потрібно, щоб почати?',
    a: 'Напишіть нам у Telegram або на пошту, що саме хочете впорядкувати: CRM, рекламу, AI чи аналітику. Далі — короткий бриф і план робіт.',
  },
]

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">06</span>
          <h2>Часті питання</h2>
        </div>
        <div className="faq__list reveal">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                {f.q}
                <span className="faq__plus" aria-hidden>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
