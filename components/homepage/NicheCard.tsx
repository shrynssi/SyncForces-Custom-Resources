import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  title: string;
}

export default function NicheCard({ href, title }: Props) {
  return (
    <Link href={href} className="niche-card">
      {title}
    </Link>
  );
}
