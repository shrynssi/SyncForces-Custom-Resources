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
    <h2>Payment Successful! 🎉</h2>
    <p>Your payment has been securely processed. Welcome to SyncForces!</p>
    
    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'white' }}>Book Your Onboarding Call</h3>
    
     
    <div className="calendly-inline-widget" data-url="https://calendly.com/syncforces/1-on-1-with-shriyans-syncforces" style={{ minWidth: '320px', height: '700px' }}></div> 
     
    
  </div>
</section>
    </>
  );
}
