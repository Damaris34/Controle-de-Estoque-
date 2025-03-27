function adicionarLinha() {
    const dataRegistro = document.getElementById('dataRegistro').value;
    const table = document.getElementById('estoqueTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cells = [
        `<td>${dataRegistro}</td>`,
        `<td><input type="text"></td>`,
        `<td><input type="number"></td>`,
        `<td><select><option value="Sim">Sim</option><option value="Não">Não</option></select></td>`,
        `<td><input type="number"></td>`,
        `<td><input type="text"></td>`,
        `<td><button onclick="removerLinha(this)">Remover</button></td>`
    ];

    cells.forEach(cell => {
        newRow.insertCell().innerHTML = cell;
    });
}

function removerLinha(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function salvarDados() {
    const table = document.getElementById('estoqueTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        const rowData = [];
        for (let cell of cells) {
            const input = cell.getElementsByTagName('input')[0] || cell.getElementsByTagName('select')[0];
            rowData.push(input ? input.value : cell.innerText);
        }
        data.push(rowData);
    }

    localStorage.setItem('estoqueData', JSON.stringify(data));
    alert('Dados salvos com sucesso!');
}

function carregarDados() {
    const data = JSON.parse(localStorage.getItem('estoqueData'));
    if (data) {
        const table = document.getElementById('estoqueTable').getElementsByTagName('tbody')[0];
        table.innerHTML = '';

        data.forEach(rowData => {
            const newRow = table.insertRow();
            rowData.forEach((cellData, index) => {
                let cellContent;
                if (index === 3) {
                    cellContent = `<select><option value="Sim">Sim</option><option value="Não">Não</option></select>`;
                    newRow.insertCell().innerHTML = cellContent;
                    newRow.cells[index].getElementsByTagName('select')[0].value = cellData;
                } else if (index === 6) {
                    newRow.insertCell().innerHTML = `<button onclick="removerLinha(this)">Remover</button>`;
                } else {
                    cellContent = `<input type="text" value="${cellData}">`;
                    newRow.insertCell().innerHTML = cellContent;
                }
            });
        });
    }
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const table = document.getElementById('estoqueTable');
    const rows = table.getElementsByTagName('tr');

    let y = 10;
    doc.text("Controle de Estoque", 10, y);
    y += 10;

    for (let row of rows) {
        const cells = row.getElementsByTagName('td');
        let text = '';
        for (let cell of cells) {
            const input = cell.getElementsByTagName('input')[0] || cell.getElementsByTagName('select')[0];
            text += input ? input.value + ' | ' : cell.innerText + ' | ';
        }
        doc.text(text, 10, y);
        y += 10;
    }

    doc.save('controle_de_estoque.pdf');
}
