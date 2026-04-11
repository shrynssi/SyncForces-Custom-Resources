const fs = require('fs');

const niches = [
  {
    id: "remodeling",
    title: "Bathroom & Kitchen Remodeling",
    niche_plural: "Kitchen & Bathroom Remodelers",
    revenue_potential: "$75K–$350K+",
    niche_business: "Remodeling",
    cheap_fix: "$500 handyman fix",
    premium_job: "$15K kitchen remodel",
    niche_work: "kitchen & bathroom remodels",
    niche_work_short: "remodeling work",
    niche_contractors: "remodeling contractors",
    niche_companies: "remodeling companies",
    customer_type_plural: "homeowners",
    customer_type_singular: "homeowner",
    pain_point_example: "outdated kitchen or bathroom",
    ad_headline_example: "\"Is your kitchen embarrassing you when guests come over?\" 😬",
    niche_estimate: "kitchen remodel estimate",
    sample_address: "123 Main St, Columbus OH",
    zip_1: "43026", zip_2: "43017", zip_3: "43235", zip_4: "43085", zip_5: "43016",
    roi_js_min: "5000", roi_js_max: "50000", roi_js_val: "15000", roi_js_step: "1000", roi_js_val_fmt: "15,000"
  },
  {
    id: "water-fire-restoration",
    title: "Water & Fire Restoration",
    niche_plural: "Water & Fire Restoration Companies",
    revenue_potential: "$100K–$500K+",
    niche_business: "Restoration",
    cheap_fix: "minor leak cleanup",
    premium_job: "$20K water damage restoration",
    niche_work: "water & fire damage restorations",
    niche_work_short: "restoration work",
    niche_contractors: "restoration contractors",
    niche_companies: "restoration companies",
    customer_type_plural: "property owners",
    customer_type_singular: "property owner",
    pain_point_example: "flooded basement or smoke damage",
    ad_headline_example: "\"Dealing with unexpected water damage? We respond 24/7.\" 🚨",
    niche_estimate: "damage assessment",
    sample_address: "456 Oak Rd, Cleveland OH",
    zip_1: "44101", zip_2: "44113", zip_3: "44114", zip_4: "44115", zip_5: "44102",
    roi_js_min: "2000", roi_js_max: "100000", roi_js_val: "8000", roi_js_step: "1000", roi_js_val_fmt: "8,000",
    ad_images: [
        "img/water-ad-1.jpg",
        "img/water-ad-2.jpg",
        "img/water-ad-3.jpg",
        "img/water-ad-4.jpg"
      ]
  },
  {
    id: "landscaping",
    title: "Landscaping",
    niche_plural: "Landscaping & Hardscaping Companies",
    revenue_potential: "$30K–$150K+",
    niche_business: "Landscaping",
    cheap_fix: "$100 lawn mow",
    premium_job: "$10K backyard oasis",
    niche_work: "landscaping & outdoor living spaces",
    niche_work_short: "landscaping work",
    niche_contractors: "landscaping contractors",
    niche_companies: "landscaping companies",
    customer_type_plural: "homeowners",
    customer_type_singular: "homeowner",
    pain_point_example: "overgrown yard or lack of curb appeal",
    ad_headline_example: "\"Want a backyard you can actually enjoy this summer?\" 🌳",
    niche_estimate: "landscaping quote",
    sample_address: "789 Pine Ln, Cincinnati OH",
    zip_1: "45202", zip_2: "45208", zip_3: "45209", zip_4: "45243", zip_5: "45226",
    roi_js_min: "1000", roi_js_max: "30000", roi_js_val: "5000", roi_js_step: "500", roi_js_val_fmt: "5,000"
  },
  {
    id: "fencing",
    title: "Fencing",
    niche_plural: "Fencing Contractors",
    revenue_potential: "$40K–$200K+",
    niche_business: "Fencing",
    cheap_fix: "$200 gate repair",
    premium_job: "$8K privacy fence installation",
    niche_work: "premium fence installations",
    niche_work_short: "fencing work",
    niche_contractors: "fencing contractors",
    niche_companies: "fencing companies",
    customer_type_plural: "homeowners",
    customer_type_singular: "homeowner",
    pain_point_example: "lack of privacy or an old, rotting fence",
    ad_headline_example: "\"Need more privacy in your backyard? Get a new fence installed fast.\" 🚧",
    niche_estimate: "fence measurement & quote",
    sample_address: "321 Cedar Ave, Dayton OH",
    zip_1: "45402", zip_2: "45409", zip_3: "45419", zip_4: "45429", zip_5: "45458",
    roi_js_min: "2000", roi_js_max: "20000", roi_js_val: "6000", roi_js_step: "500", roi_js_val_fmt: "6,000"
  },
  {
    id: "masonry",
    title: "Masonry",
    niche_plural: "Masonry & Brickwork Specialists",
    revenue_potential: "$50K–$250K+",
    niche_business: "Masonry",
    cheap_fix: "$300 brick patch",
    premium_job: "$12K custom stone patio or retaining wall",
    niche_work: "custom brick & stone masonry",
    niche_work_short: "masonry work",
    niche_contractors: "masonry contractors",
    niche_companies: "masonry companies",
    customer_type_plural: "homeowners",
    customer_type_singular: "homeowner",
    pain_point_example: "crumbling steps or an ugly concrete patio",
    ad_headline_example: "\"Upgrade your home's curb appeal with beautiful custom stonework.\" 🧱",
    niche_estimate: "masonry estimate",
    sample_address: "654 Elm St, Akron OH",
    zip_1: "44303", zip_2: "44313", zip_3: "44333", zip_4: "44321", zip_5: "44308",
    roi_js_min: "3000", roi_js_max: "40000", roi_js_val: "10000", roi_js_step: "1000", roi_js_val_fmt: "10,000"
  },
  {
    id: "concrete",
    title: "Concrete",
    niche_plural: "Concrete Contractors",
    revenue_potential: "$60K–$300K+",
    niche_business: "Concrete",
    cheap_fix: "$400 crack seal",
    premium_job: "$15K stamped concrete driveway",
    niche_work: "premium concrete pouring & flatwork",
    niche_work_short: "concrete work",
    niche_contractors: "concrete contractors",
    niche_companies: "concrete companies",
    customer_type_plural: "homeowners",
    customer_type_singular: "homeowner",
    pain_point_example: "cracked, sinking driveway",
    ad_headline_example: "\"Tired of looking at that cracked driveway? Get a beautiful new pour.\" 🚜",
    niche_estimate: "concrete quote",
    sample_address: "987 Maple Dr, Toledo OH",
    zip_1: "43604", zip_2: "43606", zip_3: "43614", zip_4: "43615", zip_5: "43617",
    roi_js_min: "2000", roi_js_max: "30000", roi_js_val: "8000", roi_js_step: "500", roi_js_val_fmt: "8,000"
  }
];

let template = fs.readFileSync('template.html', 'utf8');

// Insert a "Back to Home" button near the top
const backBtnHtml = `<div style="text-align:center; padding: 15px 0; background: var(--bg-body); border-bottom: 1px solid var(--border-color);">
  <a href="/" style="color: var(--text-main); text-decoration: none; font-weight: 600;">← Back to Home</a>
</div>`;
template = template.replace('<!-- TOPBAR -->', backBtnHtml + '\n<!-- TOPBAR -->');

// Perform exact string replacements for the remodeling default so we can replace them per niche
function processNiche(niche) {
  let html = template;
  
  html = html.replace(/Kitchen &amp; Bathroom Remodelers/g, niche.niche_plural);
  html = html.replace(/Kitchen & Bathroom Remodelers/g, niche.niche_plural);
  html = html.replace(/\$75K–\$350K\+/g, niche.revenue_potential);
  html = html.replace(/Are You Running a Remodeling Business/g, `Are You Running a ${niche.niche_business} Business`);
  html = html.replace(/\$500 handyman fix/g, niche.cheap_fix);
  html = html.replace(/\$15K kitchen remodel/g, niche.premium_job);
  html = html.replace(/premium kitchen &amp; bathroom work/g, "premium " + niche.niche_work);
  html = html.replace(/premium kitchen & bathroom work/g, "premium " + niche.niche_work);
  html = html.replace(/premium kitchen &amp; bathroom remodels/g, "premium " + niche.niche_work);
  html = html.replace(/premium kitchen & bathroom remodels/g, "premium " + niche.niche_work);
  html = html.replace(/remodeling contractors/g, niche.niche_contractors);
  html = html.replace(/remodeling companies/g, niche.niche_companies);
  html = html.replace(/outdated kitchen or bathroom/g, niche.pain_point_example);
  html = html.replace(/"Is your kitchen embarrassing you when guests come over\?" 😬/g, niche.ad_headline_example);
  
  // Plural/Singular for homeowner
  html = html.replace(/homeowners/g, niche.customer_type_plural);
  html = html.replace(/homeowner/g, niche.customer_type_singular);
  // Fix casing if it replaced the start of a sentence
  html = html.replace(/Homeowners/g, niche.customer_type_plural.charAt(0).toUpperCase() + niche.customer_type_plural.slice(1));
  html = html.replace(/Homeowner/g, niche.customer_type_singular.charAt(0).toUpperCase() + niche.customer_type_singular.slice(1));

  html = html.replace(/kitchen remodel estimate/g, niche.niche_estimate);
  html = html.replace(/123 Main St, Columbus OH/g, niche.sample_address);
  html = html.replace(/remodeling work/g, niche.niche_work_short);
  
  // Zip codes
  html = html.replace(/43026/g, niche.zip_1);
  html = html.replace(/43017/g, niche.zip_2);
  html = html.replace(/43235/g, niche.zip_3);
  html = html.replace(/43085/g, niche.zip_4);
  html = html.replace(/43016/g, niche.zip_5);

  // Ad Images
  let adsHtml = "";
  if (niche.ad_images && niche.ad_images.length > 0) {
    adsHtml = niche.ad_images.map((img, idx) => `<img src="${img}" alt="${niche.niche_business} ad ${idx + 1}" loading="lazy">`).join('\n            ');
  } else {
    adsHtml = `<img src="img/ad-before-after.png" alt="Before/After ad" loading="lazy">
            <img src="img/ad-embarrassed.png" alt="Pain point ad" loading="lazy">
            <img src="img/ad-special-offer.png" alt="Scarcity ad" loading="lazy">`;
  }
  html = html.replace('<!-- {{ADS_GALLERY}} -->', adsHtml);
  html = html.replace('{{NICHE_COMPANIES}}', niche.niche_companies);
  
  // ROI Calculator
  html = html.replace(/min="5000" max="50000" value="15000" step="1000"/g, `min="${niche.roi_js_min}" max="${niche.roi_js_max}" value="${niche.roi_js_val}" step="${niche.roi_js_step}"`);
  html = html.replace(/>\$15,000</g, `>$${niche.roi_js_val_fmt}<`);

  // Fix title
  html = html.replace(/<title>.*<\/title>/, `<title>SyncForces – Your ${niche.niche_business} Growth System</title>`);

  fs.writeFileSync(`${niche.id}.html`, html, 'utf8');
}

niches.forEach(processNiche);

// Now generate index.html (the homepage)
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SyncForces - Select Your Industry</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
  <style>
    body { background: var(--bg-body); color: var(--text-main); font-family: var(--font-sans); }
    .hp-container { max-width: 1000px; margin: 0 auto; padding: 60px 20px; text-align: center; }
    .hp-logo { max-width: 200px; margin-bottom: 20px; }
    .hp-title { font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 40px; color: var(--text-main); }
    .niche-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .niche-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 30px;
      text-decoration: none;
      color: var(--text-main);
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      box-shadow: var(--shadow-sm);
    }
    .niche-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary);
      color: var(--primary);
    }
  </style>
</head>
<body>
  <div class="hp-container">
    <img src="img/logo.png" alt="SyncForces" class="hp-logo">
    <h1 class="hp-title">Select your industry</h1>
    <div class="niche-grid">
      ${niches.map(n => `<a href="/${n.id}" class="niche-card">${n.title}</a>`).join('')}
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync('index.html', indexHtml, 'utf8');

// Generate vercel.json
const vercelJson = {
  "rewrites": niches.map(n => ({
    "source": `/${n.id}`,
    "destination": `/${n.id}.html`
  }))
};
fs.writeFileSync('vercel.json', JSON.stringify(vercelJson, null, 2), 'utf8');

console.log('Successfully generated niche pages, index.html, and vercel.json!');
