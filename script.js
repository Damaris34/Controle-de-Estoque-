function addStock() {
    const entryDate = document.getElementById('entryDate').value;
    const quantity = document.getElementById('quantity').value;
    const exitDate = document.getElementById('exitDate').value;
    const exitQuantity = document.getElementById('exitQuantity').value;
    const material = document.getElementById('material').value;

    if (!entryDate || !quantity || !exitDate || !exitQuantity || !material) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = entryDate;
    newRow.insertCell(1).innerText = quantity;
    newRow.insertCell(2).innerText = exitDate;
    newRow.insertCell(3).innerText = exitQuantity;
    newRow.insertCell(4).innerText = material;

    // Limpar os campos após adicionar
    document.getElementById('stockForm').reset();

    // Feedback visual
    newRow.style.backgroundColor = '#d4edda';
    setTimeout(() => {
        newRow.style.backgroundColor = '';
    }, 1000);
}

function exportToEmail() {
    const table = document.getElementById('stockTable');
    const rows = table.getElementsByTagName('tr');
    let csvContent = "Data de Entrada,Quantidade em Entrada,Data de Saída,Quantidade de Saída,Material em Falta\n";

    for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName('td');
        let rowData = [];
        for (let j = 0; j < cols.length; j++) {
            rowData.push(cols[j].innerText);
        }
        csvContent += rowData.join(',') + "\n";
    }

    // Cria um link para download do CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
    link.setAttribute("download", "estoque.csv");
    document.body.appendChild(link); // Necessário para Firefox
    link.click();
    document.body.removeChild(link);
}

