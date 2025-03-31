document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const responsible = document.getElementById('responsible').value;
    const materialName = document.getElementById('materialName').value;
    const quantity = document.getElementById('quantity').value;
    const receiptDate = document.getElementById('receiptDate').value;

    addToStockTable(date, responsible, materialName, quantity, receiptDate);
    clearForm();
});

document.getElementById('generatePdf').addEventListener('click', generatePDF);

function addToStockTable(date, responsible, materialName, quantity, receiptDate) {
    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = date;
    cell2.innerHTML = responsible;
    cell3.innerHTML = materialName;
    cell4.innerHTML = quantity;
    cell5.innerHTML = receiptDate;
}

function clearForm() {
    document.getElementById('stockForm').reset();
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const table = document.getElementById('stockTable');
    const rows = table.getElementsByTagName('tr');

    let y = 10;
    doc.text("Controle de Estoque", 10, y);
    y += 10;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let text = '';
        for (let j = 0; j < cells.length; j++) {
            text += cells[j].innerText + ' | ';
        }
        doc.text(text, 10, y);
        y += 10;
    }

    doc.save('controle_de_estoque.pdf');
}
