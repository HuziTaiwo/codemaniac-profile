// Reference from the DOM
const sections = document.querySelectorAll("section");
const skills = document.querySelectorAll(".skills-content > div");
const cards = document.querySelectorAll(".cards");
const showMessage = document.querySelector(".show-message");
const messageHeart = showMessage.querySelector("button");
const form = document.querySelector("#message-me");
const output = showMessage.querySelector(".output");
const arrowUp = document.querySelector(".to-top");
const navigation = document.querySelector("nav");
const navigationLinks = navigation.querySelectorAll("a");

// scroll Animation
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const contentPosition = section.getBoundingClientRect().top;
    const screenPosition = innerHeight / 1.2;

    if (contentPosition < screenPosition) {
      section.classList.add("active");

      skills.forEach((skill) => {
        if (skill.style.animation) {
          skill.style.animation = "";
        } else {
          skill.style.animation = "wiggle 0.8s ease-in-out";
        }
      });

      cards.forEach((card, i) => {
        card.style.animation = `fade 0.5s ease forwards ${i / 2 + 0.5}s`;
      });
    }
  });
});

// tooltip
const tooltips = ["profile", "skills", "projects", "contact", "social"];

const tooltipFunc = () => {
  navigationLinks.forEach((link, i) => {
    link.addEventListener("mouseenter", (e) => {
      const tooltip = e.target.children[1];

      tooltip.classList.add("active");
      tooltip.textContent = tooltips[i];
    });

    link.addEventListener("mouseleave", (e) => {
      const tooltip = e.target.children[1];

      tooltip.classList.remove("active");
    });
  });
};

tooltipFunc();

// Form Interaction
form.addEventListener("submit", messageAlert);

function messageAlert(e) {
  e.preventDefault();
  showMessage.style.display = "flex";
}

// heart the work
messageHeart.addEventListener("click", messageReview);

function messageReview() {
  messageHeart.classList.add("fas");
  messageHeart.style.animation = "";
  output.textContent = "Thanks for the support";
}

// scroll to top
arrowUp.addEventListener("click", toTop);

function toTop() {
  scroll(0, 0);
}
