const { jsPDF } = window.jspdf;

function adicionarRegistro() {
    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidade = document.getElementById('quantidade').value;

    const tbody = document.querySelector('#estoqueTable tbody');
    const newRow = tbody.insertRow();

    const cellData = newRow.insertCell();
    const cellNome = newRow.insertCell();
    const cellQuantidade = newRow.insertCell();

    cellData.textContent = dataRegistro;
    cellNome.textContent = nomeMaterial;
    cellQuantidade.textContent = quantidade;
}

function gerarPDF() {
    const doc = new jsPDF();
    const table = document.getElementById('estoqueTable');

    doc.autoTable({ html: '#estoqueTable' });
    doc.save('controle_estoque.pdf');
}
