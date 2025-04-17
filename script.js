function gerarPDF() {
    const data = document.getElementById('data').value;
    const localizacao = document.getElementById('localizacao').value;

    if (!data || !localizacao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const pdfContent = `
        <h1>Relatório</h1>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Ponto de Localização:</strong> ${localizacao}</p>
    `;

    const opt = {
        margin: 1,
        filename: 'relatorio.pdf',
        html2canvas: {},
        jsPDF: { format: 'a4' }
    };

    html2pdf().from(pdfContent).set(opt).save();
}
