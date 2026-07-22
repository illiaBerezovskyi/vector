import { useEffect } from 'react'

const sections = [
  {
    title: '1. General Provisions',
    body: [
      'This document is an official public offer (hereinafter — the "Offer") by [FULL LEGAL NAME / SOLE PROPRIETOR] (hereinafter — the "Contractor") to enter into a service agreement on the terms set out below.',
      'Payment of an invoice issued by the Contractor constitutes full and unconditional acceptance of this Offer. No signed paper copy is required for the agreement to take effect.',
    ],
  },
  {
    title: '2. Subject of the Agreement',
    body: [
      'The Contractor provides marketing and consulting services, including: CRM audit and setup, advertising campaign structure and management, analytics and reporting setup, AI automation scenarios, and related consulting.',
      'The specific scope, format, timeline and price of services are agreed individually for each order via the communication channels listed in Section 13.',
    ],
  },
  {
    title: '3. Placing an Order',
    body: [
      'The Client contacts the Contractor via Telegram, phone or email. The parties agree on the scope, timeline and price. The Contractor sends payment details. The order is considered confirmed once the payment is received.',
    ],
  },
  {
    title: '4. Pricing and Payment',
    body: [
      'The price depends on the scope and complexity of each order and is confirmed before payment. Unless otherwise agreed in writing, services are provided on the basis of 100% prepayment by bank transfer.',
      'All prices are quoted in US dollars unless stated otherwise. The Client covers any transfer fees charged by their bank.',
    ],
  },
  {
    title: '5. Service Delivery',
    body: [
      'Services are delivered remotely: by email, in messengers, via cloud storage or directly in the Client’s CRM and advertising accounts.',
      'Work begins after full payment and after the Client provides the required materials and access. The Client has five (5) business days after delivery to submit written objections; in the absence of objections the services are deemed accepted in full.',
    ],
  },
  {
    title: '6. Rights and Obligations of the Parties',
    body: [
      'The Contractor undertakes to deliver the services as agreed and to keep the Client’s commercial information confidential.',
      'The Client undertakes to provide accurate information and required access in time, to pay for the services as agreed, and to make independent business decisions based on the deliverables.',
    ],
  },
  {
    title: '7. Intellectual Property',
    body: [
      'Rights to custom materials created for the Client transfer to the Client after full payment, within the agreed scope. Templates, methodologies and third-party tools remain the property of their respective owners and are governed by their own licenses.',
    ],
  },
  {
    title: '8. Liability',
    body: [
      'The Contractor does not guarantee specific financial results (revenue, number of leads or deals), as these depend on factors outside the Contractor’s control, including the Client’s product, pricing and market conditions.',
      'The Contractor is not responsible for the availability or policy changes of third-party services (advertising platforms, CRM systems, messengers).',
      'The total aggregate liability of the Contractor under this Agreement shall not exceed the amount actually paid by the Client for the relevant order.',
    ],
  },
  {
    title: '9. Refunds',
    body: [
      'Refund requests are reviewed individually, taking into account the amount of work actually performed by the moment of the request. The refundable amount is reduced proportionally to the completed work.',
    ],
  },
  {
    title: '10. Personal Data',
    body: [
      'The Client’s personal data is processed solely for the purpose of executing this Agreement and complying with applicable law, and is not shared with third parties except where required for service delivery or by law.',
    ],
  },
  {
    title: '11. Force Majeure and Disputes',
    body: [
      'The parties are released from liability for non-performance caused by circumstances beyond their reasonable control (force majeure) for the duration of such circumstances.',
      'Disputes are resolved through negotiation; failing that, in accordance with the law of the Contractor’s country of registration.',
    ],
  },
  {
    title: '12. Term and Amendments',
    body: [
      'This Offer is effective from the moment of publication on this website and remains valid until withdrawn by the Contractor. The Contractor may amend the Offer at any time; amendments do not apply to orders already paid.',
    ],
  },
  {
    title: '13. Contractor Details',
    body: [
      '[FULL LEGAL NAME / SOLE PROPRIETOR]',
      'Registration number: [REGISTRATION / TAX ID]',
      'Registered address: [ADDRESS]',
      'Bank details: [BANK NAME, IBAN / ACCOUNT NUMBER]',
      'Phone: +1 (555) 000-0000 · Email: hello@vektor.agency · Telegram: @vektor_agency',
    ],
  },
]

export default function Offer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="legal">
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="logo">
            Vektor<span className="logo__dot">.</span>
          </a>
          <a href="#top" className="btn btn--ghost legal__back">
            ← Back to site
          </a>
        </div>
      </header>
      <main className="container legal__body">
        <h1>Public Offer Agreement</h1>
        <p className="legal__updated">Last updated: July 22, 2026</p>
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} Vektor Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
