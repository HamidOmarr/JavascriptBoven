const arr = [2, 4, 6, 8];

arr.forEach((num) => {
  const output = document.getElementById('output');

  const tableRows = Array.from({ length: 10 }, (_, i) => {
    const multiplier = i + 1;
    return `<tr><td>${num} x ${multiplier}</td><td>${num * multiplier}</td></tr>`;
  });

  const table = `<table>${tableRows.join('')}</table>`;

  output.innerHTML += `${table}<hr>`;
});