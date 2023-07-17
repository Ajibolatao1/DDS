const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

if (currentYear > 2023) {
  yearEl.textContent = `2023 - ${currentYear}`;
} else {
  yearEl.textContent = currentYear;
}
