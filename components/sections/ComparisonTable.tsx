import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function ComparisonTable({ niche }: Props) {
  return (
    <section className="section" id="compare" style={{ backgroundColor: 'var(--bg-body)' }}>
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-tag">Why Us</div>
          <h2 className="section-title">This Isn't Another Lead List. It's a Growth System 🔄</h2>
          <p className="section-sub">See how SyncForces compares to what you've probably already tried.</p>
        </div>

        <div className="compare-table-wrapper fade-in">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ fontWeight: 'normal' }}>HomeAdvisor/Angi</th>
                <th style={{ fontWeight: 'normal' }}>Hiring a Marketer</th>
                <th className="sf-col" style={{ fontWeight: 800 }}>
                  <div className="rec-badge">RECOMMENDED</div>
                  SyncForces ✅
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="fade-in" data-delay="100">
                <td>Lead Quality</td>
                <td>❌ Shared with 5+ competitors</td>
                <td>⚠️ Depends on hire</td>
                <td className="sf-col">✅ Exclusive, pre-qualified</td>
              </tr>
              <tr className="fade-in" data-delay="200">
                <td>Estimates Booked For You</td>
                <td>❌ You chase them</td>
                <td>❌ You book yourself</td>
                <td className="sf-col">✅ Auto-booked in your calendar</td>
              </tr>
              <tr className="fade-in" data-delay="300">
                <td>Automated Follow-Up</td>
                <td>❌ None</td>
                <td>⚠️ Maybe</td>
                <td className="sf-col">✅ Email, SMS & call reminders</td>
              </tr>
              <tr className="fade-in" data-delay="400">
                <td>Show Rate</td>
                <td>❌ ~30%</td>
                <td>⚠️ ~50%</td>
                <td className="sf-col">✅ 80%+</td>
              </tr>
              <tr className="fade-in" data-delay="500">
                <td>Monthly Cost</td>
                <td>$300–$1,000+ shared</td>
                <td>$2,000–$5,000+/mo</td>
                <td className="sf-col">You only pay for a qualified estimate</td>
              </tr>
              <tr className="fade-in" data-delay="600">
                <td>Long-Term Contract</td>
                <td>❌ Yes</td>
                <td>❌ 3–6 months</td>
                <td className="sf-col">✅ No contract. Pause anytime.</td>
              </tr>
              <tr className="fade-in" data-delay="700">
                <td>Setup From You</td>
                <td>Manage profile</td>
                <td>Manage them</td>
                <td className="sf-col">✅ Zero. We do everything.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
