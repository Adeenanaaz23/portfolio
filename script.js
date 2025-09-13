// ==================== Typing Animation ====================
const typingElement = document.querySelector(".typing");
const typingTexts = ["Web Developer", "UI/UX Designer", "Freelancer"];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = typingTexts[typingIndex];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause at end
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % typingTexts.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
if (typingElement) typeEffect();

// ==================== AOS Animation Init ====================
AOS.init({
  duration: 1200,
  once: true,
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ==================== Navbar Mobile Toggle (Optional) ====================
// Agar baad me hamburger menu lagana ho to yeh kaam karega
const nav = document.querySelector(".nav-links");
const toggleBtn = document.createElement("div");
toggleBtn.classList.add("menu-toggle");
toggleBtn.innerHTML = "&#9776;";
document.querySelector(".navbar").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
