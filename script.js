document.getElementById('calcBtn').addEventListener('click', function () {
  const denominations = [
    { id: 'note500', value: 500 },
    { id: 'note200', value: 200 },
    { id: 'note100', value: 100 },
    { id: 'note50', value: 50 },
    { id: 'note20', value: 20 },
    { id: 'note10', value: 10 },
    { id: 'note5', value: 5 },
    { id: 'note2', value: 2 },
    { id: 'note1', value: 1 },
  ];

  let grandTotal = 0;

  denominations.forEach(denom => {
    const count = parseInt(document.getElementById(denom.id).value) || 0;
    const total = count * denom.value;
    grandTotal += total;
    document.getElementById(denom.id + 'Total').innerText = '₹' + total;
  });

  document.getElementById('grandTotal').innerText = '₹' + grandTotal;
});
