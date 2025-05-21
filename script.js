// Keypress display
document.addEventListener("keydown", (event) => {
  const skills = ["JavaScript", "Python", "React", "Machine Learning", "CSS"];
  const random = skills[Math.floor(Math.random() * skills.length)];
  document.getElementById("keyDisplay").textContent = `Skill Spotlight: ${random}`;
});

// Hover message
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.textContent = "I'm passionate about AI, UI/UX, and frontend magic!";
  hoverBox.style.backgroundColor = "#b3e5fc";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.textContent = "👋 Hover to learn about me!";
  hoverBox.style.backgroundColor = "";
});

// Fun fact on click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Fun Fact: I love solving coding puzzles and exploring neural networks!");
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tc => tc.style.display = "none");
    document.getElementById(`tabContent${button.dataset.tab}`).style.display = "block";
  });
});

// Project gallery
const galleryImages = [
  "https://via.placeholder.com/300x200?text=Project+1",
  "https://via.placeholder.com/300x200?text=Project+2",
  "https://via.placeholder.com/300x200?text=Project+3"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % galleryImages.length;
  document.getElementById("galleryImg").src = galleryImages[imgIndex];
});

// Contact form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const output = document.getElementById("formMsg");

  if (!email.includes("@")) {
    output.textContent = "❌ Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    output.textContent = "❌ Message must be at least 10 characters.";
    return;
  }

  output.textContent = "✅ Message sent! I’ll get back to you soon.";
});
