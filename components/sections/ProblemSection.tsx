import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function ProblemSection({ niche }: Props) {
  return (
    <>
<section className="section section-alt" id="problem">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">The Reality</div>
      <h2 className="section-title">Are You Running a {niche.niche_business} Business, or is it Running You?</h2>
      <p className="section-sub">Most contractors we talk to are stuck in one of three painful cycles.</p>
    </div>
    <div className="problems-grid">
      <div className="problem-card fade-up">
        <div className="card-num">1</div>
        <div className="card-emoji">💸</div>
        <h3>Unqualified Leads</h3>
        <p>You're driving out to "estimates" with {niche.customer_type_plural} who want a {niche.cheap_fix}, not a {niche.premium_job}. Every meeting is sticker shock.</p>
        <div className="warn">⚠️ Wasted gas, wasted time, zero revenue</div>
      </div>
      <div className="problem-card fade-up d1">
        <div className="card-num">2</div>
        <div className="card-emoji">📋</div>
        <h3>Manual Pipeline Chaos</h3>
        <p>You're glued to your phone — texting leads, sending reminders, following up on quotes. You're doing secretary work instead of selling jobs.</p>
        <div className="warn">⚠️ Burnout from constant hustle</div>
      </div>
      <div className="problem-card fade-up d2">
        <div className="card-num">3</div>
        <div className="card-emoji">📉</div>
        <h3>Feast or Famine Revenue</h3>
        <p>3 big jobs this month, nothing next month. You can't hire a crew, invest in equipment, or plan ahead when you don't know what's coming in.</p>
        <div className="warn">⚠️ Can't grow without consistency</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
