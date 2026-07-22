const bars = [38, 52, 34, 66, 48, 74, 58, 88, 70, 100]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__blob hero__blob--1" aria-hidden />
      <div className="hero__blob hero__blob--2" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">CRM · Реклама · AI · Аналітика</div>
          <h1>
            Продажі, які можна <span className="accent">виміряти</span>
          </h1>
          <p className="hero__sub">
            Будуємо систему з CRM, реклами, AI-інструментів та звітності, де
            кожен лід відстежується, а кожне рішення спирається на цифри.
          </p>
          <div className="hero__actions">
            <a href="#contacts" className="btn btn--primary btn--lg">
              Замовити послугу <span aria-hidden>→</span>
            </a>
            <a href="#calculator" className="btn btn--ghost btn--lg">
              Порахувати ефект
            </a>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <div className="stat__num">30+</div>
              <div className="stat__label">впроваджених систем</div>
            </div>
            <div className="stat">
              <div className="stat__num">×2.4</div>
              <div className="stat__label">середнє зростання конверсії</div>
            </div>
            <div className="stat">
              <div className="stat__num">14 днів</div>
              <div className="stat__label">до перших результатів</div>
            </div>
          </div>
        </div>
        <div className="hero__visual" aria-hidden>
          <div className="dash">
            <div className="dash__top">
              <span className="dash__dot" />
              <span className="dash__dot" />
              <span className="dash__dot" />
              <span className="dash__title">Дашборд продажів</span>
            </div>
            <div className="dash__kpis">
              <div className="dash__kpi">
                <span>Ліди</span>
                <strong>324</strong>
                <em>+18%</em>
              </div>
              <div className="dash__kpi">
                <span>Угоди</span>
                <strong>67</strong>
                <em>+24%</em>
              </div>
              <div className="dash__kpi">
                <span>Виручка</span>
                <strong>$98k</strong>
                <em>+31%</em>
              </div>
            </div>
            <div className="dash__chart">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="dash-float dash-float--lead">
            <span className="dash-float__icon">⚡</span> Новий лід із реклами
          </div>
          <div className="dash-float dash-float--ai">
            <span className="dash-float__icon">🤖</span> AI кваліфікував лід
          </div>
        </div>
      </div>
    </section>
  )
}
