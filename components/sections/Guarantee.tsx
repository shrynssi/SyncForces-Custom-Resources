import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function Guarantee({ niche }: Props) {
  return (
    <>
<section className="guarantee" id="guarantee">
  <div className="container fade-up">
    <h2 className="section-title">Our Guarantee 🛡️</h2>
    <p className="g-p">We're putting our money where our mouth is. If we don't deliver 30 qualified estimates in 90 days, we keep working for free AND cover up to $5,000 in ad spend out of our own pocket.</p>
    <div className="g-cards">
      <div className="g-card"><span className="g-icon">🎯</span> <span className="g-text">30 Estimates in 90 Days</span></div>
      <div className="g-card"><span className="g-icon">🔄</span> <span className="g-text">Free Work Until We Deliver</span></div>
      <div className="g-card"><span className="g-icon">💵</span> <span className="g-text">$5K Ad Spend Covered</span></div>
      <div className="g-card"><span className="g-icon">🤝</span> <span className="g-text">Zero Risk For You</span></div>
    </div>
  </div>
</section>
    </>
  );
}
