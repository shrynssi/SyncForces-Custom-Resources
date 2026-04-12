import React from 'react';
import { Niche } from '@/types/niche';

interface Props {
  niche: Niche;
}

export default function CTASection({ niche }: Props) {
  return (
    <>
<section className="cta-final">
  <div className="container fade-up">
    <h2>Ready to scale your business?</h2>
    <p>Book a discovery call to see if SyncForces is a fit.</p>
    
    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'white' }}>Book Your Onboarding Call</h3>
    
    <div style={{ height: '700px', width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://calendly.com/syncforces/1-on-1-with-shriyans-syncforces"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Book Your Onboarding Call"
      />
    </div>
    
  </div>
</section>
    </>
  );
}
