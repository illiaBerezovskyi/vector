export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__badge">CRM · Ads · AI · Analytics</div>
        <h1>
          Sales you can <span className="accent">measure</span>
        </h1>
        <p className="hero__sub">
          We build a system of CRM, advertising, AI tools and reporting where
          every lead is tracked and every decision is backed by numbers.
        </p>
        <div className="hero__actions">
          <a href="#contacts" className="btn btn--primary btn--lg">
            Work with us <span aria-hidden>→</span>
          </a>
          <a href="#calculator" className="btn btn--ghost btn--lg">
            Calculate the impact
          </a>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <div className="stat__num">30+</div>
            <div className="stat__label">systems delivered</div>
          </div>
          <div className="stat">
            <div className="stat__num">×2.4</div>
            <div className="stat__label">average conversion growth</div>
          </div>
          <div className="stat">
            <div className="stat__num">14 days</div>
            <div className="stat__label">to first results</div>
          </div>
        </div>
      </div>
    </section>
  )
}
