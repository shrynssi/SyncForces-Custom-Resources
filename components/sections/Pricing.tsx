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
        <div className="sf">Setup Fee: <strong>$750</strong></div>
        <div className="amt">$2,500</div>
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

    {/* Service Level Agreement & Policies */}
    <div className="service-policies fade-up" style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', textAlign: 'left' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Our Commitment to Quality & Transparency</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1e293b' }}>1. What is a "Qualified Estimate"?</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#475569', fontSize: '0.95rem' }}>
            <li>The homeowner must own the property.</li>
            <li>They must be actively looking to start a project within the next 30-90 days.</li>
            <li>The project scope must align with your primary services (no small handyman repairs unless specified).</li>
            <li>They must agree to an in-person or virtual consultation with you or your sales team.</li>
            <li>If a lead doesn't meet these criteria, you don't pay for it (on the pay-per-estimate plan).</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1e293b' }}>2. Standardized Onboarding Process</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#475569', fontSize: '0.95rem' }}>
            <li><strong>Day 1:</strong> Kickoff call & system access setup (CRM, dashboards).</li>
            <li><strong>Day 2-3:</strong> Ad asset creation, audience targeting, and campaign buildout.</li>
            <li><strong>Day 4:</strong> Lead qualification & appointment setting automation activation.</li>
            <li><strong>Day 5:</strong> Campaign launch & testing phase begins.</li>
            <li>The $750 setup fee covers all technical integrations, ad copywriting, and CRM customization.</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1e293b' }}>3. Retainer SLAs & Performance</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#475569', fontSize: '0.95rem' }}>
            <li><strong>Deliverables:</strong> Full end-to-end campaign management, dedicated ISA (Inside Sales Agent) for qualification, and weekly reporting.</li>
            <li><strong>Response Times:</strong> All inbound leads contacted within 5 minutes during business hours. Client support tickets answered within 12 hours.</li>
            <li><strong>Performance:</strong> Ongoing A/B testing to decrease cost-per-estimate by at least 10% quarter-over-quarter.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
