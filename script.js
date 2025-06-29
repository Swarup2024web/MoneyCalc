document.getElementById('calcBtn').addEventListener('click', function () {
  // Get all input values and convert to numbers
  const n100 = parseInt(document.getElementById('note100').value) || 0;
  const n200 = parseInt(document.getElementById('note200').value) || 0;
  const n500 = parseInt(document.getElementById('note500').value) || 0;
  const c10 = parseInt(document.getElementById('coin10').value) || 0;
  const c5 = parseInt(document.getElementById('coin5').value) || 0;
  const c2 = parseInt(document.getElementById('coin2').value) || 0;

  // Calculate total for each type
  const total100 = n100 * 100;
  const total200 = n200 * 200;
  const total500 = n500 * 500;
  const total10 = c10 * 10;
  const total5 = c5 * 5;
  const total2 = c2 * 2;

  // Final total
  const totalAmount = total100 + total200 + total500 + total10 + total5 + total2;

  // Update UI
  document.getElementById('note100Total').innerText = total100;
  document.getElementById('note200Total').innerText = total200;
  document.getElementById('note500Total').innerText = total500;
  document.getElementById('coin10Total').innerText = total10;
  document.getElementById('coin5Total').innerText = total5;
  document.getElementById('coin2Total').innerText = total2;
  document.getElementById('grandTotal').innerText = totalAmount;
});
