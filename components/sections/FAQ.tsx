'use client';

import React, { useState } from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function FAQ({ niche }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "How much do I need to spend on ads?", a: "Min $30/day directly to Meta. Most clients $30–$50/day, results in 2–3 weeks." },
    { q: "What makes leads different from HomeAdvisor?", a: "HomeAdvisor shares leads with 3–5 contractors. Ours are exclusive, pre-qualified, auto-booked." },
    { q: "How long until I get estimates?", a: "First estimates 5–7 days after going live. Consistent by week 2–3." },
    { q: "What if I've tried Facebook ads before?", a: "Ads are 20% of the system. Qualification + booking + reminders are the 80% agencies skip." },
    { q: "Do I need a long-term contract?", a: "No. Pay Per Estimate: pause anytime. Bundle: 65 guaranteed or we work free." },
    { q: "What if leads don't show up?", a: "4 reminders: email 24hr, SMS 3hr, SMS 1hr, call 30min. Show rate 80%+." },
    { q: "Do I need to be tech-savvy?", a: "No. We set everything up. You check your calendar and show up." },
    { q: "What if I'm in a small market?", a: "Smaller markets = lower ad costs. We adjust targeting at kickoff." }
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-tag">Common Questions</div>
          <h2 className="section-title">Got Questions? We've Got Answers 💬</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="fade-up" data-delay={idx * 100}>
              <div className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                  <h4 className={openIdx === idx ? 'bold-q' : ''}>{faq.q}</h4>
                  <span className="faq-plus">+</span>
                </div>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
