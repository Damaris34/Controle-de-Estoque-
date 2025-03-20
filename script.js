document.getElementById('movimentacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarMovimentacao();
});

document.getElementById('gerarRelatorio').addEventListener('click', gerarRelatorioMensal);

function adicionarMovimentacao() {
    const data = document.getElementById('data').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidade = document.getElementById('quantidade').value;
    const tipoMovimentacao = document.getElementById('tipoMovimentacao').value;

    const tbody = document.querySelector('#tabelaEstoque tbody');
    const newRow = tbody.insertRow();

    newRow.insertCell(0).textContent = data;
    newRow.insertCell(1).textContent = nomeMaterial;
    newRow.insertCell(2).textContent = quantidade;
    newRow.insertCell(3).textContent = tipoMovimentacao;

    document.getElementById('movimentacaoForm').reset();
}

function gerarRelatorioMensal() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Relatório Mensal de Estoque", 10, 10);

    const dataAtual = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.text(`Data de Geração: ${dataAtual}`, 10, 20);

    const table = document.getElementById('tabelaEstoque');
    const rows = table.rows;

    let y = 30;
    const headers = ["Data", "Nome do Material", "Quantidade", "Tipo"];

    doc.setFontSize(12);
    doc.setFont("bold");
    headers.forEach((header, index) => {
        doc.text(header, 10 + index * 45, y);
    });
    y += 10;

    doc.setFont("normal");
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].cells;
        cells.forEach((cell, index) => {
            doc.text(cell.textContent, 10 + index * 45, y);
        });
        y += 10;
    }

    doc.save('relatorio_mensal_estoque.pdf');
}
