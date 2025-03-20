function adicionarMaterial() {
    const dataEntrada = document.getElementById('dataEntrada').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidadeEntrada = document.getElementById('quantidadeEntrada').value;
    const dataSaida = document.getElementById('dataSaida').value || 'N/A';
    const quantidadeSaida = document.getElementById('quantidadeSaida').value || 'N/A';
    const emFalta = document.getElementById('emFalta').checked;
    const descricaoFalta = document.getElementById('descricaoFalta').value;

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
        newRowFalta.insertCell(3).textContent = descricaoFalta; // Adiciona a descrição
    }

    document.getElementById('estoqueForm').reset();
}
