/* Resetando estilo básico para garantir que todos os navegadores exibam da mesma forma */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos gerais */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.5rem;
}

main {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Estilo do formulário */
.form-section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-section h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #4CAF50;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    font-size: 1rem;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

/* Tabela */
.table-section table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

table th, table td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
}

table th {
    background-color: #4CAF50;
    color: white;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.table-section h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #4CAF50;
}

/* Seção de PDF */
.pdf-section {
    display: flex;
    justify-content: center;
}

#gerarRelatorio {
    width: 250px;
    background-color: #007bff;
    padding: 12px;
    font-size: 1.2rem;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#gerarRelatorio:hover {
    background-color: #0056b3;
}

/* Rodapé */
footer {
    text-align: center;
    font-size: 1rem;
    margin-top: 40px;
    color: #555;
}
ocument.getElementById('estoqueForm').addEventListener('submit', function(event) {
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
    doc.setFillColor(76, 175, 80); // Cor de fundo verde para o cabeçalho
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
 
