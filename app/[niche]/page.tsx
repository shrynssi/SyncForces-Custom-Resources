import React from 'react';
import { notFound } from 'next/navigation';
import { niches } from '@/config/niches';
import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import Subsystems from '@/components/sections/Subsystems';
import Pricing from '@/components/sections/Pricing';
import OnboardingTimeline from '@/components/sections/OnboardingTimeline';
import Guarantee from '@/components/sections/Guarantee';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ niche: string }>;
}

export async function generateStaticParams() {
  return niches.map((n) => ({
    niche: n.id,
  }));
}

export default async function NichePage({ params }: Props) {
  const { niche: nicheId } = await params;
  const nicheData = niches.find((n) => n.id === nicheId);

  if (!nicheData) {
    notFound();
  }

  return (
    <>
      <Hero niche={nicheData} />
      <ProblemSection niche={nicheData} />
      <SolutionSection niche={nicheData} />
      <Subsystems niche={nicheData} />
      <Pricing niche={nicheData} />
      <OnboardingTimeline niche={nicheData} />
      <Guarantee niche={nicheData} />
      <Testimonials niche={nicheData} />
      <FAQ niche={nicheData} />
      <CTASection niche={nicheData} />
    </>
  );
}
