document.getElementById('estoqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarMaterial();
});

document.getElementById('exportarExcel').addEventListener('click', exportarParaExcel);

function adicionarMaterial() {
    const dataEntrada = document.getElementById('dataEntrada').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidadeEntrada = document.getElementById('quantidadeEntrada').value;
    const dataSaida = document.getElementById('dataSaida').value || 'N/A';
    const quantidadeSaida = document.getElementById('quantidadeSaida').value || 'N/A';
    const emFalta = document.getElementById('emFalta').checked ? 'Sim' : 'Não';

    const tbody = document.querySelector('#tabelaEstoque tbody');
    const newRow = tbody.insertRow();

    newRow.insertCell(0).textContent = dataEntrada;
    newRow.insertCell(1).textContent = nomeMaterial;
    newRow.insertCell(2).textContent = quantidadeEntrada;
    newRow.insertCell(3).textContent = dataSaida;
    newRow.insertCell(4).textContent = quantidadeSaida;
    newRow.insertCell(5).textContent = emFalta;

    document.getElementById('estoqueForm').reset();
}

function exportarParaExcel() {
    const table = document.getElementById('tabelaEstoque');
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'estoque.xlsx');
}
