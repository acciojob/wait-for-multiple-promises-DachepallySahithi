//your JS code here. If required.
function getRandomTIme() {
	return(Math.random() * 2 + 1).toFixed(3);
}
const promises = [
	new Promise(resolve => setTimeout(() => resolve({ name: "Promise 1", time: getRandomTIme() }), getRandomTIme() * 1000)),
	new Promise(resolve => setTimeout(() => resolve({ name: "Promise 2", time: getRandomTime() }), getRandomTime() * 1000)),
    new Promise(resolve => setTimeout(() => resolve({ name: "Promise 3", time: getRandomTime() }), getRandomTime() * 1000))
];

const startTime = performance.now();
      
      Promise.all(promises).then(results => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);
        
        const tableBody = document.getElementById("output");
        document.getElementById("loading").remove();
        
        results.forEach(result => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
          tableBody.appendChild(row);
        });
        
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
        tableBody.appendChild(totalRow);
      });