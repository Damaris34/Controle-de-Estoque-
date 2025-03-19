document.getElementById('estoqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarMaterial();
});

document.getElementById('gerarRelatorio').addEventListener('click', gerarRelatorio);

function adicionarMaterial() {
    const data = document.getElementById('data').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const dataRelatorio = document.getElementById('dataRelatorio').value;

    const tbody = document.querySelector('#tabelaEstoque tbody');
    const newRow = tbody.insertRow();

    newRow.insertCell(0).textContent = data;
    newRow.insertCell(1).textContent = nomeMaterial;
    newRow.insertCell(2).textContent = dataRelatorio;

    document.getElementById('estoqueForm').reset();
}

function gerarRelatorio() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adicionando título ao relatório
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text("Relatório de Estoque", doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

    // Adicionando data e hora de geração
    const dataHora = new Date().toLocaleString();
    doc.setFontSize(12);
    doc.text(`Gerado em: ${dataHora}`, 10, 30);

    // Adicionando cabeçalho da tabela
    const table = document.getElementById('tabelaEstoque');
    let y = 40;

    // Adicionando cabeçalhos da tabela
    const headers = [];
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        headers.push(table.rows[0].cells[i].textContent);
    }
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(0, 123, 255); // Cor de fundo azul para o cabeçalho
    doc.text(headers.join('\t'), 10, y);
    y += 10;

    // Adicionando linhas da tabela
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    for (let i = 1; i < table.rows.length; i++) {
        const cells = table.rows[i].cells;
        let text = '';
        for (let j = 0; j < cells.length; j++) {
            text += cells[j].textContent + '\t';
        }
        doc.text(text, 10, y);
        y += 10;
    }

    // Adicionando rodapé
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFontSize(10);
    doc.text("Controle de Estoque - Relatório Gerado por Sistema", 10, pageHeight - 10);

    // Salvando o PDF
    doc.save('relatorio_estoque.pdf');
}
