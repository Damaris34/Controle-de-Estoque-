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
    doc.setFontSize(18);
    doc.text("Relatório de Estoque", 10, 10);

    // Adicionando data e hora de geração
    const dataHora = new Date().toLocaleString();
    doc.setFontSize(12);
    doc.text(`Gerado em: ${dataHora}`, 10, 20);

    // Adicionando cabeçalho da tabela
    const table = document.getElementById('tabelaEstoque');
    const headers = [];
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        headers.push(table.rows[0].cells[i].textContent);
    }
    doc.text(headers.join('\t'), 10, 30);

    // Adicionando linhas da tabela
    let y = 40;
    for (let i = 1; i < table.rows.length; i++) {
        const cells = table.rows[i].cells;
        let text = '';
        for (let j = 0; j < cells.length; j++) {
            text += cells[j].textContent + '\t';
        }
        doc.text(text, 10, y);
        y += 10;
    }

    // Salvando o PDF
    doc.save('relatorio_estoque.pdf');
}
