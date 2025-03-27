function adicionarLinha() {
    const table = document.getElementById('estoqueTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cells = [
        `<td><input type="date"></td>`,
        `<td><input type="text"></td>`,
        `<td><input type="number"></td>`,
        `<td><select><option value="Sim">Sim</option><option value="Não">Não</option></select></td>`,
        `<td><input type="number"></td>`,
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

