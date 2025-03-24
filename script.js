function addStock() {
    const entryDate = document.getElementById('entryDate').value;
    const quantity = document.getElementById('quantity').value;
    const exitDate = document.getElementById('exitDate').value;
    const exitQuantity = document.getElementById('exitQuantity').value;
    const material = document.getElementById('material').value;

    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = entryDate;
    newRow.insertCell(1).innerText = quantity;
    newRow.insertCell(2).innerText = exitDate;
    newRow.insertCell(3).innerText = exitQuantity;
    newRow.insertCell(4).innerText = material;
}

function exportToEmail() {
    alert('Funcionalidade de exportação para email não implementada.');
}
