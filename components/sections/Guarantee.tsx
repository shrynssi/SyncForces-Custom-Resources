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
    <p className="g-p">We're putting our money where our mouth is. If we don't deliver 65 qualified estimates, we keep working for free until we do.</p>
    <div className="g-cards">
      <div className="g-card fade-in shimmer-target" data-delay="0"><span className="g-icon">🎯</span> <span className="g-text">65 Qualified Estimates</span></div>
      <div className="g-card fade-in shimmer-target" data-delay="200"><span className="g-icon">🔄</span> <span className="g-text">Free Work Until We Deliver</span></div>
      <div className="g-card fade-in shimmer-target" data-delay="400"><span className="g-icon">🤝</span> <span className="g-text">Zero Risk For You</span></div>
    </div>
  </div>
</section>
    </>
  );
}
