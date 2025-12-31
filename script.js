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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -120px 0px"
  }
);

reveals.forEach(el => observer.observe(el));




// Interactive Services Toggle
const serviceItems = document.querySelectorAll(".service-item");
const serviceContents = document.querySelectorAll(".service-content");

serviceItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.dataset.service;

    serviceItems.forEach(btn => btn.classList.remove("active"));
    serviceContents.forEach(content => content.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
