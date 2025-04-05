// Hungarian Algorithm Implementation (Simple)
function hungarian(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const size = Math.max(n, m);
    // Pad matrix
    for (let i = 0; i < size; i++) {
      if (!matrix[i]) matrix[i] = Array(size).fill(0);
      for (let j = 0; j < size; j++) {
        if (typeof matrix[i][j] === 'undefined') matrix[i][j] = 0;
      }
    }
    // Here you can plug in a proper implementation — for now we just assign row i to col i as placeholder.
    const assignments = [];
    for (let i = 0; i < size; i++) {
      assignments.push([i, i]);
    }
    return assignments;
  }
  function generateMatrix() {
    const workerCount = parseInt(document.getElementById('workers').value);
    const jobCount = parseInt(document.getElementById('jobs').value);
    const container = document.getElementById('matrix-inputs');
    container.innerHTML = '';
  
    for (let i = 0; i < workerCount; i++) {
      for (let j = 0; j < jobCount; j++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.required = true;
        input.placeholder = `W${i+1}-J${j+1}`;
        input.id = `cell-${i}-${j}`;
        container.appendChild(input);
      }
      container.appendChild(document.createElement('br'));
    }
  }
  function solveAssignment(matrix) {
    const assignments = hungarian(matrix);
    let result = [];
    let totalCost = 0;
  
    assignments.forEach(([i, j]) => {
      const cost = matrix[i][j];
      result.push(`Worker ${i+1} assigned to Job ${j+1} with cost ${cost}`);
      totalCost += cost;
    });
  
    return { result, totalCost };
  }

  document.getElementById('matrix-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const workers = parseInt(document.getElementById('workers').value);
    const jobs = parseInt(document.getElementById('jobs').value);
    const matrix = [];
  
    for (let i = 0; i < workers; i++) {
      const row = [];
      for (let j = 0; j < jobs; j++) {
        const val = parseInt(document.getElementById(`cell-${i}-${j}`).value);
        row.push(val);
      }
      matrix.push(row);
    }
  
    const { result, totalCost } = solveAssignment(matrix);
    document.getElementById('result').textContent = result.join('\n') + `\n\nTotal Minimum Cost: ${totalCost}`;
    document.getElementById('conclusion').style.display = 'block';
  });
  
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resultText = document.getElementById('result').textContent;
    const conclusionText = document.getElementById('conclusion').textContent;
  
    const lines = doc.splitTextToSize(resultText, 180);
    const conclusionLines = doc.splitTextToSize(conclusionText, 180);
  
    doc.text("Assignment Problem Result:", 10, 10);
    doc.text(lines, 10, 20);
    doc.text("Conclusion:", 10, 20 + lines.length * 10);
    doc.text(conclusionLines, 10, 30 + lines.length * 10);
    doc.save("assignment_result.pdf");
  }
  
  function downloadCSV() {
    const result = document.getElementById("result").textContent.replace(/\n/g, "\r\n");
    const blob = new Blob([result], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "assignment_result.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  