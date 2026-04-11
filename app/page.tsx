import React from 'react';
import NicheCard from '@/components/homepage/NicheCard';
import { niches } from '@/config/niches';

export default function Home() {
  return (
    <div className="hp-container">
      <img src="/assets/logo.png" alt="SyncForces" className="hp-logo" />
      <h1 className="hp-title">Select your industry</h1>
      <div className="niche-grid">
        {niches.map((niche) => (
          <NicheCard
            key={niche.id}
            href={`/${niche.id}`}
            title={niche.title}
          />
        ))}
      </div>
    </div>
  );
}
