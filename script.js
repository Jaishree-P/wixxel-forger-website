/* =========================
   SCROLL PROGRESS
========================= */
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});

/* =========================
   SCROLL REVEAL OBSERVER
========================= */
const reveals = document.querySelectorAll(".reveal");
let lastScrollY = 0;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -120px 0px"
  }
);

reveals.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
});

/* =========================
   SERVICE DETAILS DATA
========================= */
const serviceData = {
  'website-development': {
    title: '🌐 Website Development',
    subtitle: 'From Idea to Launch',
    steps: ['Research', 'Design', 'Development', 'Launch'],
    description: 'We build fast, modern, SEO-ready websites that turn visitors into customers.'
  },
  'seo-optimization': {
    title: '🔍 SEO Optimization',
    subtitle: 'From Visibility to Authority',
    steps: ['Audit', 'Keywords', 'Optimization', 'Ranking'],
    description: 'We help your business rank higher, attract organic traffic, and build long-term credibility.'
  },
  'digital-marketing': {
    title: '📈 Digital Marketing',
    subtitle: 'From Reach to Conversion',
    steps: ['Strategy', 'Content', 'Ads', 'Leads'],
    description: 'Data-driven campaigns that attract, engage, and convert your audience.'
  },
  'influencer-marketing': {
    title: '🤝 Influencer Marketing',
    subtitle: 'From Trust to Impact',
    steps: ['Identify', 'Collaborate', 'Promote', 'Measure'],
    description: 'Authentic influencer collaborations that amplify your brand voice.'
  },
  'logo-branding': {
    title: '🎨 Logo & Branding',
    subtitle: 'From Identity to Recognition',
    steps: ['Discovery', 'Design', 'Refinement', 'Brand Kit'],
    description: 'We create memorable visual identities that make brands stand out.'
  },
  'digital-design-collaterals': {
  title: '🎨 Digital Design Collaterals',
  subtitle: 'From Message to Visual Impact',
  steps: ['Concept', 'Design', 'Brand Alignment', 'Delivery'],
  description: 'Professional digital creatives including invitations, social media visuals, posters, and branded marketing assets designed for clear communication and consistent brand presence.'
}
};

/* =========================
   MODAL FUNCTIONS
========================= */
function openModal(serviceId) {
  const service = serviceData[serviceId];
  const modal = document.getElementById('serviceModal');
  const modalBody = document.getElementById('modalBody');
  
  let stepsHTML = service.steps.map(step => `<span>${step}</span>`).join('');
  
  modalBody.innerHTML = `
    <h2>${service.title}</h2>
    <span class="journey-label">${service.subtitle}</span>
    <div class="journey-steps">
      ${stepsHTML}
    </div>
    <p class="journey-desc">${service.description}</p>
  `;
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('serviceModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('serviceModal');
  if (e.target === modal) {
    closeModal();
  }
});





