const items = [
  {
    num: '01',
    tag: 'CRM',
    title: 'Управління лідами',
    text: 'Кожна заявка фіксується, розподіляється й доводиться до угоди — нічого не губиться.',
  },
  {
    num: '02',
    tag: 'ADS',
    title: 'Трафік',
    text: 'Рекламні кампанії з UTM-розміткою та зрозумілою вартістю ліда по кожному каналу.',
  },
  {
    num: '03',
    tag: 'AI',
    title: 'Автоматизація',
    text: 'AI-асистенти та сценарії, які знімають рутину з менеджерів і відповідають клієнтам 24/7.',
  },
  {
    num: '04',
    tag: 'BI',
    title: 'Аналітика',
    text: 'Дашборди з ключовими метриками: від витрат на рекламу до виручки по менеджерах.',
  },
]

export default function SystemGrid() {
  return (
    <section className="system">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">01</span>
          <h2>Одна система замість розрізнених інструментів</h2>
          <p>
            CRM, реклама, AI та аналітика синхронізовані між собою — дані
            течуть між каналами без ручного перенесення.
          </p>
        </div>
        <div className="system__grid stagger reveal">
          {items.map((it) => (
            <div key={it.tag} className="system__card">
              <div className="system__head">
                <span className="system__tag">{it.tag}</span>
                <span className="system__index">{it.num}</span>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
        <div className="system__note reveal">
          <span className="system__note-dot" /> Online — працюємо по всій Україні
        </div>
      </div>
    </section>
  )
}
