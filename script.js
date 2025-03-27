// Função para adicionar um novo item ao estoque
function addStock() {
    // Captura os valores dos campos do formulário
    const entryDate = document.getElementById('entryDate').value;
    const quantity = document.getElementById('quantity').value;
    const exitDate = document.getElementById('exitDate').value;
    const exitQuantity = document.getElementById('exitQuantity').value;
    const material = document.getElementById('material').value;

    // Valida as entradas
    if (!validateInputs(entryDate, quantity, exitDate, exitQuantity, material)) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Adiciona uma nova linha à tabela
    const tableBody = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = entryDate;
    newRow.insertCell(1).innerText = quantity;
    newRow.insertCell(2).innerText = exitDate;
    newRow.insertCell(3).innerText = exitQuantity;
    newRow.insertCell(4).innerText = material;

    // Limpa o formulário
    clearForm();

    // Adiciona feedback visual
    newRow.style.backgroundColor = '#d4edda';
    setTimeout(() => {
        newRow.style.backgroundColor = '';
    }, 1000);
}

// Função para exportar dados para um arquivo CSV
function exportToEmail() {
    const table = document.getElementById('stockTable');
    const rows = table.getElementsByTagName('tr');
    let csvContent = "Data de Entrada,Quantidade em Entrada,Data de Saída,Quantidade de Saída,Material em Falta\n";

    // Itera sobre as linhas da tabela para construir o conteúdo CSV
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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para validar as entradas do formulário
function validateInputs(entryDate, quantity, exitDate, exitQuantity, material) {
    return entryDate && quantity && exitDate && exitQuantity && material;
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById('stockForm').reset();
}

// Função para enviar a resposta
function submitResponse() {
    const response = document.getElementById('responseText').value;
    if (response) {
        alert('Resposta enviada: ' + response);
        document.getElementById('responseText').value = '';
    } else {
        alert('Por favor, digite uma resposta.');
    }
}
