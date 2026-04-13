import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function Subsystems({ niche }: Props) {
  return (
    <>
        <div className="recap-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item left slide-left" data-delay="0">
            <div className="ti-content">
              <div className="ti-icon">🎯</div>
              <h4>Meta Ads Infrastructure</h4>
              <p>Direct-response campaigns designed to find {niche.customer_type_plural} who are actively looking for {niche.premium_job}s.</p>
            </div>
          </div>
          <div className="timeline-item right slide-right" data-delay="200">
            <div className="ti-content">
              <div className="ti-icon">✅</div>
              <h4>Frictionless Qualification</h4>
              <p>We filter out tire-kickers by asking the right questions upfront. You only speak to people with budget.</p>
            </div>
          </div>
          <div className="timeline-item left slide-left" data-delay="400">
            <div className="ti-content">
              <div className="ti-icon">📅</div>
              <h4>Calendar Booking System</h4>
              <p>Leads book themselves directly into your calendar. No more chasing people down.</p>
            </div>
          </div>
          <div className="timeline-item right slide-right" data-delay="600">
            <div className="ti-content">
              <div className="ti-icon">🔔</div>
              <h4>Automated Follow-Up</h4>
              <p>Emails, texts, and voice drops keep leads engaged until they show up for the estimate.</p>
            </div>
          </div>
        </div>
    </>
  );
}
