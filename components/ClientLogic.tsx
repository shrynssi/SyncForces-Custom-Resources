'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLogic() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Step Tabs
    const tabs = document.querySelectorAll('.step-tab');
    const handleTabClick = (e: Event) => {
      const tab = e.currentTarget as HTMLElement;
      const s = tab.dataset.step;
      document.querySelectorAll('.step-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.step-panel').forEach(p => {
        p.classList.remove('active');
        if (p.id === 'step-' + s) p.classList.add('active');
      });
    };
    tabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
    });

    // 2. ROI Calculator
    const est = document.getElementById('roi-est') as HTMLInputElement | null;
    const cr = document.getElementById('roi-cr') as HTMLInputElement | null;
    const js2 = document.getElementById('roi-js') as HTMLInputElement | null;
    
    const vE = document.getElementById('v-est');
    const vC = document.getElementById('v-cr');
    const vJ = document.getElementById('v-js');
    const rJ = document.getElementById('r-jobs');
    const rR = document.getElementById('r-rev');
    
    function calc() {
      if (!est || !cr || !js2 || !vE || !vC || !vJ || !rJ || !rR) return;
      const e = +est.value;
      const c = +cr.value;
      const j = +js2.value;
      vE.textContent = e.toString();
      vC.textContent = c + '%';
      vJ.textContent = '$' + j.toLocaleString();
      const jobs = Math.round(e * (c / 100));
      const rev = jobs * j;
      anim(rJ, jobs);
      anim(rR, rev, true);
    }
    
    function anim(el: HTMLElement, target: number, isCurrency = false) {
      if (!el) return;
      const c = +(el.dataset.c || 0);
      if (c === target) {
        el.textContent = isCurrency ? '$' + target.toLocaleString() : target.toString();
        return;
      }
      const diff = target - c;
      const steps = 10;
      let i = 0;
      function tick() {
        i++;
        const v = Math.round(c + (diff / steps) * i);
        el.textContent = isCurrency ? '$' + v.toLocaleString() : v.toString();
        if (i < steps) {
          requestAnimationFrame(tick);
        } else {
          el.dataset.c = target.toString();
          el.textContent = isCurrency ? '$' + target.toLocaleString() : target.toString();
        }
      }
      requestAnimationFrame(tick);
    }
    
    const handleInput = () => calc();
    if (est && cr && js2) {
      [est, cr, js2].forEach(s => s.addEventListener('input', handleInput));
      calc();
    }

    // 3. Fade-up Intersection Observer
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    
    document.querySelectorAll('.fade-up, .timeline-item').forEach(el => obs.observe(el));

    // 4. Recap Timeline
    const timeline = document.querySelector('.recap-timeline');
    const timelineLine = document.querySelector('.timeline-line') as HTMLElement | null;
    
    const handleScrollTimeline = () => {
      if (timeline && timelineLine) {
        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          let progress = (windowHeight - rect.top) / (rect.height + windowHeight / 2);
          progress = Math.max(0, Math.min(1, progress));
          timelineLine.style.setProperty('--line-progress', `${progress * 100}%`);
        }
      }
    };
    
    if (timeline && timelineLine) {
      window.addEventListener('scroll', handleScrollTimeline, { passive: true });
      handleScrollTimeline();
    }

    // 5. Smooth scroll
    const handleSmoothScroll = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const t = document.querySelector(href);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(a => a.addEventListener('click', handleSmoothScroll));

    // Cleanup
    return () => {
      tabs.forEach(tab => tab.removeEventListener('click', handleTabClick));
      if (est && cr && js2) {
        [est, cr, js2].forEach(s => s.removeEventListener('input', handleInput));
      }
      obs.disconnect();
      if (timeline && timelineLine) {
        window.removeEventListener('scroll', handleScrollTimeline);
      }
      links.forEach(a => a.removeEventListener('click', handleSmoothScroll));
    };
  }, [pathname]);

  return null;
}
