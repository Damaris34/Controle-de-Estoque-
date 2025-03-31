function gerarPDF() {
    // Obter valores do formulário
    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const materialFalta = document.getElementById('materialFalta').value;
    const quantidadeFalta = document.getElementById('quantidadeFalta').value;

    // Criar conteúdo do PDF
    const pdfContent = `
        <h1>Relatório de Estoque</h1>
        <p><strong>Data de Registro:</strong> ${dataRegistro}</p>
        <p><strong>Nome do Material:</strong> ${nomeMaterial}</p>
        <p><strong>Material em Falta:</strong> ${materialFalta}</p>
        <p><strong>Quantidade em Falta:</strong> ${quantidadeFalta}</p>
    `;

    // Criar um novo objeto jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Adicionar conteúdo ao PDF
    pdf.setFontSize(22);
    pdf.text("Relatório de Estoque", 10, 10);
    pdf.setFontSize(12);
    pdf.text(`Data de Registro: ${dataRegistro}`, 10, 20);
    pdf.text(`Nome do Material: ${nomeMaterial}`, 10, 30);
    pdf.text(`Material em Falta: ${materialFalta}`, 10, 40);
    pdf.text(`Quantidade em Falta: ${quantidadeFalta}`, 10, 50);

    // Salvar o PDF
    pdf.save('relatorio_estoque.pdf');
}
