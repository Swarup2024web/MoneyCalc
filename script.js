// Denominations and their values
const denominations = [
  { id: "note2000", value: 2000 },
  { id: "note500", value: 500 },
  { id: "note200", value: 200 },
  { id: "note100", value: 100 },
  { id: "note50", value: 50 },
  { id: "note20", value: 20 },
  { id: "note10", value: 10 },
  { id: "note5", value: 5 },
  { id: "note2", value: 2 },
  { id: "note1", value: 1 }
];

// Calculate total value
document.getElementById("calcBtn").addEventListener("click", () => {
  let grandTotal = 0;

  denominations.forEach(denom => {
    const count = parseInt(document.getElementById(denom.id).value) || 0;
    const total = count * denom.value;
    document.getElementById("total" + denom.value).textContent = "₹" + total;
    grandTotal += total;
  });

  // Animate total
  animateTotal(grandTotal);
});

// Reset form
function resetForm() {
  denominations.forEach(denom => {
    document.getElementById(denom.id).value = 0;
    document.getElementById("total" + denom.value).textContent = "₹0";
  });
  animateTotal(0);
}

// Animate the total counter
function animateTotal(finalValue) {
  const display = document.getElementById("grandTotal");
  let current = 0;
  const duration = 500; // ms
  const steps = 25;
  const increment = finalValue / steps;

  clearInterval(display.timer);

  display.timer = setInterval(() => {
    current += increment;
    if (current >= finalValue) {
      current = finalValue;
      clearInterval(display.timer);
    }
    display.textContent = "₹" + Math.round(current);
  }, duration / steps);
}
