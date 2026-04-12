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
        <h3>Pay Per Estimate</h3>
        <div className="ps2">Only pay when we book a qualified estimate</div>
        <div className="sf">Setup Fee: <strong>$750</strong></div>
        <div className="amt">$125</div>
        <div className="per">per qualified estimate</div>
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
        <a href="https://book.stripe.com/6oU9AT0Va5gDeQZ8d5aVa0q" className="btn-p" target="_blank" rel="noopener noreferrer">Get Started →</a>
      </div>
      <div className="pc fade-up d2">
        <h3>Monthly Retainer</h3>
        <div className="ps2">Guaranteed volume, predictable pricing</div>
        <div className="sf">No Setup Fee</div>
        <div className="amt">$3,500</div>
        <div className="per">per month</div>
        <div className="gb">✅ 30 Estimates Guaranteed in 90 Days — Or We Continue Free + Cover $5K Ad Spend</div>
        <ul>
          <li>Everything in Pay Per Estimate</li>
          <li>No per-estimate costs</li>
          <li>Guaranteed 30 estimates in 90 days</li>
          <li>Priority support & optimization</li>
          <li>Predictable monthly budget</li>
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
