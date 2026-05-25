// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
reveals.forEach((el) => observer.observe(el));

// Lightbox
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbCaption = document.getElementById("lightbox-caption");

document.querySelectorAll(".project-img-wrap").forEach((wrap) => {
  wrap.addEventListener("click", () => {
    const img = wrap.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeLb() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
}

// Click outside image closes
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLb();
});
document.getElementById("lightbox-close").addEventListener("click", closeLb);

// ESC key closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLb();
});
