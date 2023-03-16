function calculateSavings() {
  const budget1 = parseFloat(document.getElementById("budget1").value);
  const budget2 = parseFloat(document.getElementById("budget2").value);

  const savings = budget1 - budget2;

  document.getElementById("savings").textContent = "$" + savings.toFixed(2);
}
