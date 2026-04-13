import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function OnboardingTimeline({ niche }: Props) {
  return (
    <section className="section section-alt" id="onboarding">
      <div className="container">
        <div className="section-header fade-up">
          <div className="section-tag">Your Onboarding</div>
          <h2 className="section-title">From 'Yes' to Leads in 7 Days ⚡</h2>
          <p className="section-sub">Here's exactly what happens after you sign up. No guesswork.</p>
        </div>

        <div className="recap-timeline onboarding-timeline">
          <div className="timeline-line onboarding-line"></div>
          
          <div className="timeline-item left slide-left">
            <div className="ti-content">
              <div className="ti-icon">📞</div>
              <h4>Day 1: Kickoff Call</h4>
              <p>30-min call to learn your business. We handle everything from here.</p>
            </div>
          </div>
          
          <div className="timeline-item right slide-right" data-delay="200">
            <div className="ti-content">
              <div className="ti-icon">🛠️</div>
              <h4>Day 2–3: Campaign Build</h4>
              <p>Ad creatives, landing pages, forms, automated sequences. All custom.</p>
            </div>
          </div>
          
          <div className="timeline-item left slide-left" data-delay="400">
            <div className="ti-content">
              <div className="ti-icon">✅</div>
              <h4>Day 4: Review & Approve</h4>
              <p>You approve everything before launch. Changes same-day.</p>
            </div>
          </div>
          
          <div className="timeline-item right slide-right" data-delay="600">
            <div className="ti-content">
              <div className="ti-icon">🚀</div>
              <h4>Day 5–7: Go Live</h4>
              <p>Ads live, system active, reminders armed.</p>
            </div>
          </div>
          
          <div className="timeline-item left slide-left" data-delay="800">
            <div className="ti-content">
              <div className="ti-icon">📅</div>
              <h4>Week 2+: Estimates Rolling In</h4>
              <p>Homeowners book into your calendar. You show up and close.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}