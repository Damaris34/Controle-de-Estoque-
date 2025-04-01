function adicionarLinha() {
    const tableBody = document.querySelector('#estoqueTable tbody');
    const newRow = document.createElement('tr');

    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidadeSaiu = document.getElementById('quantidadeSaiu').value;
    const faltaMaterial = document.getElementById('faltaMaterial').value;
    const nomeMaterialFalta = document.getElementById('nomeMaterialFalta').value;

    newRow.innerHTML = `
        <td>${dataRegistro}</td>
        <td>${nomeMaterial}</td>
        <td>${quantidadeSaiu}</td>
        <td>${faltaMaterial}</td>
        <td>${nomeMaterialFalta}</td>
    `;

    tableBody.appendChild(newRow);
}

document.getElementById('gerarPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Adicionar título e data
    const date = new Date().toLocaleDateString();
    doc.setFontSize(20);
    doc.text("Controle de Estoque", 10, 10);
    doc.setFontSize(12);
    doc.text(`Data de Geração: ${date}`, 10, 20);

    // Adicionar tabela
    const table = document.getElementById('estoqueTable');
    const rows = table.rows;

    let y = 30;
    const headers = [];
    const cells = rows[0].cells;
    for (let j = 0; j < cells.length; j++) {
        headers.push(cells[j].innerText);
    }
    const tableData = Array.from(rows).slice(1).map(row =>
        Array.from(row.cells).map(cell => cell.innerText)
    );

    doc.autoTable({
        head: [headers],
        body: tableData,
        startY: y
    });

    doc.save('controle_de_estoque.pdf');
});
