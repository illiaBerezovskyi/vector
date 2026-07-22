export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
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
    </section>
  )
}
