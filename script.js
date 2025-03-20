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
    const emFalta = document.getElementById('emFalta').checked;

    const tbodyEstoque = document.querySelector('#tabelaEstoque tbody');
    const newRowEstoque = tbodyEstoque.insertRow();

    newRowEstoque.insertCell(0).textContent = dataEntrada;
    newRowEstoque.insertCell(1).textContent = nomeMaterial;
    newRowEstoque.insertCell(2).textContent = quantidadeEntrada;
    newRowEstoque.insertCell(3).textContent = dataSaida;
    newRowEstoque.insertCell(4).textContent = quantidadeSaida;
    newRowEstoque.insertCell(5).textContent = emFalta ? 'Sim' : 'Não';

    if (emFalta) {
        const tbodyFalta = document.querySelector('#tabelaMateriaisEmFalta tbody');
        const newRowFalta = tbodyFalta.insertRow();

        newRowFalta.insertCell(0).textContent = nomeMaterial;
        newRowFalta.insertCell(1).textContent = quantidadeEntrada;
        newRowFalta.insertCell(2).textContent = quantidadeSaida;
    }

    document.getElementById('estoqueForm').reset();
}

function exportarParaExcel() {
    const table = document.getElementById('tabelaEstoque');
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'estoque.xlsx');
}
