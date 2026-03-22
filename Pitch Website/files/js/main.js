document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.navbar');
  if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});

  document.querySelectorAll('.step-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      const s=tab.dataset.step;
      document.querySelectorAll('.step-tab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.step-panel').forEach(p=>{
        p.classList.remove('active');
        if(p.id==='step-'+s) p.classList.add('active');
      });
    });
  });

  const est=document.getElementById('roi-est'),cr=document.getElementById('roi-cr'),js2=document.getElementById('roi-js');
  const vE=document.getElementById('v-est'),vC=document.getElementById('v-cr'),vJ=document.getElementById('v-js');
  const rJ=document.getElementById('r-jobs'),rR=document.getElementById('r-rev');
  function calc(){
    if(!est)return;
    const e=+est.value,c=+cr.value,j=+js2.value;
    vE.textContent=e;vC.textContent=c+'%';vJ.textContent='$'+j.toLocaleString();
    const jobs=Math.round(e*(c/100)),rev=jobs*j;
    anim(rJ,jobs);anim(rR,rev,true);
  }
  function anim(el,target,cur=false){
    if(!el)return;
    const c=+(el.dataset.c||0),diff=target-c,steps=10;
    let i=0;
    (function tick(){
      i++;const v=Math.round(c+diff/steps*i);
      el.textContent=cur?'$'+v.toLocaleString():v;
      if(i<steps)requestAnimationFrame(tick);
      else{el.dataset.c=target;el.textContent=cur?'$'+target.toLocaleString():target}
    })();
  }
  if(est){[est,cr,js2].forEach(s=>s.addEventListener('input',calc));calc()}

  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
    });
  });
});
