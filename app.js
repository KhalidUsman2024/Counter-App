const value = document.querySelector(".value");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const themeToggle = document.querySelector(".theme-toggle");
let count = 0;

// Update the display value
function updateDisplay() {
  value.innerText = count;
  value.style.transform = "scale(1.2)";
  setTimeout(() => (value.style.transform = "scale(1)"), 150);
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrement (won’t go below zero)
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Theme toggle (Dark/Light Mode)
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
