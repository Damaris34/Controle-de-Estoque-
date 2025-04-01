<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
document.getElementById('gerarPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text("Controle de Estoque", 10, 10);

    const table = document.getElementById('estoqueTable');
    const rows = table.rows;

    let y = 20;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        let text = '';
        for (let j = 0; j < cells.length; j++) {
            text += cells[j].innerText + '\t';
        }
        doc.text(text, 10, y);
        y += 10;
    }

    doc.save('controle_de_estoque.pdf');
});
