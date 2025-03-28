const { jsPDF } = window.jspdf;

function adicionarRegistro() {
    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidade = document.getElementById('quantidade').value;

    if (!dataRegistro || !nomeMaterial || !quantidade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const tbody = document.querySelector('#estoqueTable tbody');
    const newRow = tbody.insertRow();

    const cellData = newRow.insertCell();
    const cellNome = newRow.insertCell();
    const cellQuantidade = newRow.insertCell();

    cellData.textContent = dataRegistro;
    cellNome.textContent = nomeMaterial;
    cellQuantidade.textContent = quantidade;

    // Limpar o formulário após adicionar o registro
    document.getElementById('estoqueForm').reset();
}

function gerarPDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#estoqueTable' });
    doc.save('controle_estoque.pdf');
}
