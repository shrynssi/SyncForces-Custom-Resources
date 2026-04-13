import React from 'react';
import { Niche } from '@/types/niche';
import ComparisonTable from './ComparisonTable';

interface Props {
  niche: Niche;
}

export default function SolutionSection({ niche }: Props) {
  return (
    <>
<section className="section" id="how">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">How We Fill Your Calendar</div>
      <h2 className="section-title">We Handle Everything. You Just Show Up & Close 🤝</h2>
      <p className="section-sub">Click through each step to see exactly how we get {niche.customer_type_plural} booked on your calendar.</p>
    </div>

    <div className="how-container fade-up d1">
      <div className="steps-tabs">
        <div className="step-tab active" data-step="1">🎯 Target</div>
        <div className="step-tab" data-step="2">📱 Attract</div>
        <div className="step-tab" data-step="3">✍️ Engage</div>
        <div className="step-tab" data-step="4">✅ Qualify</div>
        <div className="step-tab" data-step="5">📅 Book</div>
        <div className="step-tab" data-step="6">🔔 Remind</div>
        <div className="tabs-progress-container" style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', marginTop: '4px', overflow: 'hidden' }}>
          <div className="tabs-progress-bar" id="tab-progress" style={{ height: '100%', background: 'var(--primary)', width: '16.66%', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <div className="steps-content">
        
        <div className="step-panel active" id="step-1">
          <div className="panel-top">
        <div className="p-icon">🎯</div>
        <h3>Target Your Service Area</h3>
        <p>We zero in on high-income zip codes and {niche.customer_type_plural} in your area who can actually afford premium {niche.niche_work}.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual">
          <strong style={{ fontSize: '.88rem', color: 'var(--gray-700)' }}>📍 Targeting {niche.customer_type_plural} in your area:</strong>
          <div className="zip-grid">
            <div className="zip-chip">{niche.zip_1}</div>
            <div className="zip-chip">{niche.zip_2}</div>
            <div className="zip-chip">{niche.zip_3}</div>
            <div className="zip-chip">{niche.zip_4}</div>
            <div className="zip-chip">{niche.zip_5}</div>
          </div>
          <div className="target-meta">
            <span>High-Income</span>
            <span>{niche.customer_type_plural.charAt(0).toUpperCase() + niche.customer_type_plural.slice(1)}</span>
            <span>Your Area</span>
          </div>
        </div>
      </div>
    </div>

    
    <div className="step-panel" id="step-2">
      <div className="panel-top">
        <div className="p-icon">📱</div>
        <h3>Scroll-Stopping Ads</h3>
        <p>Professional ad creatives built specifically for {niche.niche_contractors} that make {niche.customer_type_plural} stop scrolling and take action.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual">
          <div className="ads-gallery" data-ab-test="ad-size-increase-v2">
            {niche.adsImage ? (
              <img src={niche.adsImage} alt={`${niche.niche_business} ad`} className="w-full rounded-xl" loading="lazy" />
            ) : niche.ad_images && niche.ad_images.length > 0 ? (
              niche.ad_images.map((img, idx) => (<img key={idx} src={`/${img}`} alt={`${niche.niche_business} ad ${idx + 1}`} loading="lazy" />))
            ) : (
              <><img src="/assets/ad-before-after.png" alt="Before/After ad" loading="lazy" /><img src="/assets/ad-embarrassed.png" alt="Pain point ad" loading="lazy" /><img src="/assets/ad-special-offer.png" alt="Scarcity ad" loading="lazy" /></>
            )}
          </div>
          <div className="ads-label">👆 Real ads we create and run for {niche.niche_companies}</div>
        </div>
      </div>
    </div>

    
    <div className="step-panel" id="step-3">
      <div className="panel-top">
        <div className="p-icon">✍️</div>
        <h3>Copy That Speaks Their Language</h3>
        <p>Smart ad copy that hits {niche.customer_type_plural} right where it hurts — their {niche.pain_point_example} — and gets them to take action.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual" style={{ textAlign: 'center' }}>
          <div className="phone-frame">
            <div className="ph-hl">{niche.ad_headline_example}</div>
            <div className="ph-body">We specialize in premium {niche.niche_work} that transform your home. Limited spots available this month.</div>
            <div className="ph-btn">Get Your Free Estimate →</div>
            <div className="ph-flow">⬇️ {niche.customer_type_singular.charAt(0).toUpperCase() + niche.customer_type_singular.slice(1)} clicks & enters your funnel</div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="step-panel" id="step-4">
      <div className="panel-top">
        <div className="p-icon">✅</div>
        <h3>Only Serious {niche.customer_type_plural.charAt(0).toUpperCase() + niche.customer_type_plural.slice(1)} Get Through</h3>
        <p>A few quick questions filter out the tire-kickers. Only qualified {niche.customer_type_plural} who are ready to spend move forward.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual">
          <div className="q-list">
            <div className="q-item"><span className="q-ck">✓</span><span>Are you the {niche.customer_type_singular}?</span></div>
            <div className="q-item"><span className="q-ck">✓</span><span>What's the scope of your project?</span></div>
            <div className="q-item"><span className="q-ck">✓</span><span>What's your budget range?</span></div>
            <div className="q-item"><span className="q-ck">✓</span><span>When do you want to get started?</span></div>
          </div>
          <div className="q-flow">
            <span className="qs">👤 Lead Clicks Ad</span>
            <span className="qa">→</span>
            <span className="qs">📝 Answers Questions</span>
            <span className="qa">→</span>
            <span className="qs">✅ Qualified</span>
            <span className="qa">→</span>
            <span className="qs">📅 Books Estimate</span>
          </div>
        </div>
      </div>
    </div>

    
    <div className="step-panel" id="step-5">
      <div className="panel-top">
        <div className="p-icon">📅</div>
        <h3>They Book Right Into Your Calendar</h3>
        <p>Qualified leads pick a time that works for both of you. No back-and-forth, no phone tag. Just booked estimates.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual">
          <div className="mini-cal">
            <div className="cal-bar">
              <h4>📅 Your Calendar</h4>
              <span className="cal-mo">March 2026</span>
            </div>
            <div className="cal-grid">
              <div className="cd lbl">Sun</div><div className="cd lbl">Mon</div><div className="cd lbl">Tue</div><div className="cd lbl">Wed</div><div className="cd lbl">Thu</div><div className="cd lbl">Fri</div><div className="cd lbl">Sat</div>
              <div className="cd past">15</div><div className="cd past">16</div><div className="cd past">17</div><div className="cd past">18</div><div className="cd past">19</div><div className="cd past">20</div><div className="cd past">21</div>
              <div className="cd today">22</div><div className="cd booked">23</div><div className="cd booked">24</div><div className="cd avail">25</div><div className="cd avail">26</div><div className="cd avail">27</div><div className="cd">28</div>
              <div className="cd">29</div><div className="cd avail">30</div><div className="cd avail">31</div><div className="cd"></div><div className="cd"></div><div className="cd"></div><div className="cd"></div>
            </div>
            <div className="bk-slots">
              <div className="bk-slot"><span>Mon, Mar 23 — 10:00 AM</span><span className="bk-ok">Confirmed</span></div>
              <div className="bk-slot"><span>Tue, Mar 24 — 2:00 PM</span><span className="bk-ok">Confirmed</span></div>
              <div className="bk-slot"><span>Wed, Mar 25 — 11:00 AM</span><span style={{ color: 'var(--purple)', fontWeight: '700', fontSize: '.76rem' }}>Available</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="step-panel" id="step-6">
      <div className="panel-top">
        <div className="p-icon">🔔</div>
        <h3>We Make Sure They Show Up</h3>
        <p>Automated reminders go out before every appointment so {niche.customer_type_plural} actually show up. No more no-shows eating your time.</p>
      </div>
      <div className="panel-body">
        <div className="panel-visual">
          <div className="remind-tl">
            <div className="r-item">
              <div className="r-dot email">📧</div>
              <div className="r-card"><div className="r-lbl el">EMAIL • 24 HOURS BEFORE</div><div className="r-txt">Hi Sarah! Just a reminder — your {niche.niche_estimate} is tomorrow at 10:00 AM.</div></div>
            </div>
            <div className="r-item">
              <div className="r-dot sms">💬</div>
              <div className="r-card"><div className="r-lbl sl">SMS • 3 HOURS BEFORE</div><div className="r-txt">Your estimate with [Your Company] is today at 10 AM. Reply YES to confirm!</div></div>
            </div>
            <div className="r-item">
              <div className="r-dot sms">💬</div>
              <div className="r-card"><div className="r-lbl sl">SMS • 1 HOUR BEFORE</div><div className="r-txt">See you in 1 hour! 📍 {niche.sample_address}</div></div>
            </div>
            <div className="r-item">
              <div className="r-dot call">📞</div>
              <div className="r-card"><div className="r-lbl cl">LIVE CALL • 30 MIN BEFORE</div><div className="r-txt">Quick confirmation call to make sure the {niche.customer_type_singular} is ready and on their way.</div></div>
            </div>
          </div>
          <div className="r-result">✅ Result: 80%+ show rate — no more wasted drive-outs</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</section>


<section className="section section-alt" id="roi">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">Your Potential</div>
      <h2 className="section-title">See What This Could Be Worth To You 💰</h2>
      <p className="section-sub">Drag the sliders to see how much new revenue you could bring in every single month.</p>
    </div>
    <div className="roi-calc fade-up d1">
      <div className="slider-group">
        <label>Estimates Per Month <span className="val" id="v-est">10</span></label>
        <input type="range" id="roi-est" min="5" max="30" defaultValue="10" />
      </div>
      <div className="slider-group">
        <label>Your Close Rate <span className="val" id="v-cr">50%</span></label>
        <input type="range" id="roi-cr" min="10" max="80" defaultValue="50" step="5" />
      </div>
      <div className="slider-group">
        <label>Average Job Size <span className="val" id="v-js">${niche.roi_js_val_fmt}</span></label>
        <input type="range" id="roi-js" min={niche.roi_js_min} max={niche.roi_js_max} defaultValue={niche.roi_js_val} step={niche.roi_js_step} />
      </div>
      <div className="roi-line"></div>
      <div className="roi-results">
        <div className="roi-box"><div className="big" id="r-jobs" data-c="0">5</div><div className="lbl">Jobs You'll Close / Month</div></div>
        <div className="roi-box"><div className="big green" id="r-rev" data-c="0">$75,000</div><div className="lbl">Projected Monthly Revenue</div></div>
      </div>
    </div>
  </div>
</section>

<ComparisonTable niche={niche} />

<section className="section" id="paths">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">Your Choice</div>
      <h2 className="section-title">Two Paths. One Choice. Your Future 🔀</h2>
      <p className="section-sub">Right now you're at a fork in the road. Which one are you taking?</p>
    </div>
    <div className="paths-grid">
      <div className="path-card smart slide-left">
        <div className="p-emoji">🚀</div>
        <h3>Smart Path</h3>
        <div className="p-sub">You work with us</div>
        <div className="ps"><span className="t">Today</span><span className="d">We launch your first ad campaign</span></div>
        <div className="ps"><span className="t">Week 1</span><span className="d">Qualified leads start coming in</span></div>
        <div className="ps"><span className="t">Week 2-3</span><span className="d">First jobs close — real revenue hits the bank</span></div>
        <div className="ps"><span className="t">Month 2</span><span className="d">Your pipeline is filling up fast</span></div>
        <div className="ps"><span className="t">Month 3</span><span className="d">You need to hire. Scale is within reach</span></div>
        <div className="p-result">✅ Predictable revenue. You can finally plan, invest, and grow.</div>
      </div>
      <div className="paths-vs fade-in" data-delay="300">VS</div>
      <div className="path-card silly slide-right">
        <div className="p-emoji">🤡</div>
        <h3>Silly Path</h3>
        <div className="p-sub">You keep doing it alone</div>
        <div className="ps"><span className="t">Today</span><span className="d">Nothing changes. Same hustle, different day</span></div>
        <div className="ps"><span className="t">Tomorrow</span><span className="d">Still chasing low-quality leads by hand</span></div>
        <div className="ps"><span className="t">Week 2</span><span className="d">More tire-kickers. Another no-show</span></div>
        <div className="ps"><span className="t">Month 3</span><span className="d">Burnout sinks in. This isn't fun anymore</span></div>
        <div className="ps"><span className="t">Month 6</span><span className="d">You realize you can't scale — YOU are the ceiling</span></div>
        <div className="p-result">❌ Stuck on the hamster wheel doing admin work & chasing leads</div>
      </div>
    </div>
  </div>
</section>


<div className="stat-strip">
  <div className="container">
    <div className="stat-item"><div className="sn">$90K+</div><div className="sl">Lost in the next year by "thinking about it"</div></div>
    <div className="stat-item"><div className="sn">100%</div><div className="sl">Chance your family says you work too hard</div></div>
    <div className="stat-item"><div className="sn">0</div><div className="sl">Days added to your calendar by "waiting to see"</div></div>
  </div>
</div>


<div className="choice-cta">
  <div className="container">
    <h2 className="section-title">So... Which Path Are You Taking? 🤔</h2>
    <p className="section-sub" style={{ margin: '0 auto 24px' }}>You're already here. You've already invested the time to see how it works.</p>
    <a href="#pricing" className="btn-blue">I'M READY – LET'S GO 🚀</a>
  </div>
</div>


<section className="section" id="recap">
  <div className="container">
    <div className="section-header fade-up">
      <div className="section-tag">Just to Recap</div>
      <h2 className="section-title">We Do the Heavy Lifting. You Show Up and Close 💪</h2>
    </div>
    <div className="recap-timeline">
      <div className="timeline-line"></div>
      
      <div className="timeline-item left">
        <div className="ti-content">
          <div className="ti-icon">🎯</div>
          <h4>We Find Them</h4>
          <p>Target {niche.customer_type_plural} actively looking for {niche.niche_work_short}.</p>
        </div>
      </div>
      
      <div className="timeline-item right">
        <div className="ti-content">
          <div className="ti-icon">✅</div>
          <h4>We Filter Them</h4>
          <p>Only serious, qualified {niche.customer_type_plural} get through.</p>
        </div>
      </div>
      
      <div className="timeline-item left">
        <div className="ti-content">
          <div className="ti-icon">📅</div>
          <h4>We Book Them</h4>
          <p>Estimates go right into your calendar.</p>
        </div>
      </div>
      
      <div className="timeline-item right">
        <div className="ti-content">
          <div className="ti-icon">🔔</div>
          <h4>We Remind Them</h4>
          <p>Automated reminders so they actually show up.</p>
        </div>
      </div>
      
      <div className="timeline-item left">
        <div className="ti-content">
          <div className="ti-icon">🔄</div>
          <h4>We Follow Up</h4>
          <p>Old leads get re-engaged automatically.</p>
        </div>
      </div>
    </div>
    <div className="recap-box fade-up">
      <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>💰</div>
      <h3>All You Do: Show Up & Close $</h3>
      <p>We handle finding, filtering, booking, and reminding. You just need to show up at the estimate and close the deal. That's it.</p>
    </div>
  </div>
</section>



    </>
  );
}
