function gerarRelatorio() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adicionando título ao relatório
    doc.setFontSize(16);
    doc.text("Relatório de Estoque", 10, 10);

    // Adicionando data de geração do relatório
    const dataAtual = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.text(`Data de Geração: ${dataAtual}`, 10, 20);

    // Configurando estilo da tabela
    const table = document.getElementById('tabelaEstoque');
    const rows = table.rows;

    let y = 30; // Posição inicial para o conteúdo da tabela
    const headers = ["Data", "Nome do Material", "Data para Relatório"];

    // Adicionando cabeçalhos da tabela
    doc.setFontSize(12);
    doc.setFont("bold");
    headers.forEach((header, index) => {
        doc.text(header, 10 + index * 60, y);
    });
    y += 10;

    // Adicionando linhas da tabela
    doc.setFont("normal");
    for (let i = 1; i < rows.length; i++) { // Começando em 1 para ignorar o cabeçalho da tabela HTML
        const cells = rows[i].cells;
        let text = '';
        cells.forEach((cell, index) => {
            doc.text(cell.textContent, 10 + index * 60, y);
        });
        y += 10;
    }

    // Salvando o PDF
    doc.save('relatorio_estoque.pdf');
}
