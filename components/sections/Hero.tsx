import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function Hero({ niche }: Props) {
  return (
    <>
<section className="hero" id="top">
  <div className="container fade-up">
    <div className="hero-badge">🏠 Built for {niche.niche_plural}</div>
    <h1>Stop Wasting Time on Tire-Kickers Who Can't Afford Your Work 🚫</h1>
    <p className="hero-sub">We install a done-for-you system that books 30–60 qualified estimates in 90 days, follows up automatically, and builds a pipeline that can bring in {niche.revenue_potential} in new jobs — without you chasing leads or touching any tech.</p>
    <a href="#how" className="btn-hero">See How It Works 👇</a>
  </div>
</section>
    </>
  );
}
