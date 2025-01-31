function getRandomTime() {
        return (Math.random() * 2 + 1).toFixed(3);
      }
      
      function createPromise(name) {
        const time = getRandomTime();
        return new Promise(resolve => setTimeout(() => resolve({ name, time }), time * 1000));
      }
      
      const promises = [
        createPromise("Promise 1"),
        createPromise("Promise 2"),
        createPromise("Promise 3")
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
      }).catch(error => {
        console.error("Error in promises: ", error);
      });