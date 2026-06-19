import React from 'react';
import { niches } from '@/config/niches';
import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import Pricing from '@/components/sections/Pricing';
import OnboardingTimeline from '@/components/sections/OnboardingTimeline';
import Guarantee from '@/components/sections/Guarantee';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  const treeRemovalData = niches.find((n) => n.id === 'tree-removal');

  if (!treeRemovalData) {
    return <div>Tree Removal niche data not found.</div>;
  }

  return (
    <>
      <Hero niche={treeRemovalData} />
      <ProblemSection niche={treeRemovalData} />
      <SolutionSection niche={treeRemovalData} />
      <Pricing niche={treeRemovalData} />
      <OnboardingTimeline niche={treeRemovalData} />
      <Guarantee niche={treeRemovalData} />
      <Testimonials niche={treeRemovalData} />
      <FAQ niche={treeRemovalData} />
      <CTASection niche={treeRemovalData} />
    </>
  );
}
