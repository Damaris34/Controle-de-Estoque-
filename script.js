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
