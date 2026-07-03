import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function Pricing({ niche }: Props) {
  return (
    <>
<section className="section section-alt" id="pricing">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">Simple, Transparent Pricing</div>
      <h2 className="section-title">Choose What Works Best For You 💳</h2>
      <p className="section-sub">No hidden fees. No long-term contracts. Just results.</p>
    </div>
    <div className="pricing-grid">
      <div className="pc fade-up d1">
        <h3>Option 1</h3>
        <div className="ps2">Lower per-appointment cost</div>
        <div className="sf">Setup Fee: <strong>$300</strong></div>
        <div className="amt">$147</div>
        <div className="per">per appointment</div>
        <ul>
          <li>Targeted Meta ad campaigns</li>
          <li>Full lead qualification</li>
          <li>Estimates booked in your calendar</li>
          <li>Automated follow-up & reminders</li>
          <li>Real-time dashboard access</li>
          <li>No monthly commitment</li>
          <li>Scale up or pause anytime</li>
          <li><strong>Client covers ad spend</strong></li>
        </ul>
        <a href="https://buy.stripe.com/bJe6oH1Ze7oLeQZfFxaVa0s" className="btn-p" target="_blank" rel="noopener noreferrer">Get Started →</a>
      </div>
      <div className="pc bundle fade-up d2">
        <div className="popular-badge">MOST POPULAR</div>
        <h3>Option 2</h3>
        <div className="ps2">Lowest barrier to entry</div>
        <div className="sf">Setup Fee: <strong>$1</strong></div>
        <div className="amt">$197</div>
        <div className="per">per appointment</div>
        <div className="gb">✅ 45 Estimates Guaranteed — Or We Work For Free Until We Do</div>
        <ul>
          <li>Everything in Option 1</li>
          <li>Minimal upfront commitment</li>
          <li>Guaranteed 45 estimates</li>
          <li><strong>$97 for every missed estimate</strong></li>
          <li>Priority support & optimization</li>
          <li>Predictable budget</li>
          <li><strong>Client covers ad spend</strong> (min. $30/day)</li>
        </ul>
        <a href="https://buy.stripe.com/4gM6oHeM024rcIRdxpaVa0r" className="btn-p" target="_blank" rel="noopener noreferrer">Get Started →</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
