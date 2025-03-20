document.getElementById('movimentacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    registrarMovimentacao();
});

document.getElementById('importarExcel').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', importarExcel);

document.getElementById('exportarExcel').addEventListener('click', exportarParaExcel);

let estoque = [];

function registrarMovimentacao() {
    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const tipoMovimentacao = document.getElementById('tipoMovimentacao').value;

    const movimentacao = {
        dataRegistro,
        nomeMaterial,
        quantidade,
        tipoMovimentacao,
        dataSaida: tipoMovimentacao === 'saida' ? dataRegistro : ''
    };

    estoque.push(movimentacao);
    atualizarTabela();
    document.getElementById('movimentacaoForm').reset();
}

function atualizarTabela() {
    const tbody = document.querySelector('#tabelaEstoque tbody');
    tbody.innerHTML = '';

    estoque.forEach(movimentacao => {
        const newRow = tbody.insertRow();
        newRow.insertCell(0).textContent = movimentacao.dataRegistro;
        newRow.insertCell(1).textContent = movimentacao.nomeMaterial;
        newRow.insertCell(2).textContent = movimentacao.quantidade;
        newRow.insertCell(3).textContent = movimentacao.tipoMovimentacao;
        newRow.insertCell(4).textContent = movimentacao.dataSaida;
    });
}

function importarExcel(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        estoque = json.slice(1).map(row => ({
            dataRegistro: row[0],
            nomeMaterial: row[1],
            quantidade: parseInt(row[2]),
            tipoMovimentacao: row[3],
            dataSaida: row[4]
        }));

        atualizarTabela();
    };

    reader.readAsArrayBuffer(file);
}

function exportarParaExcel() {
    const ws = XLSX.utils.json_to_sheet(estoque, { header: ['Data de Registro', 'Nome do Material', 'Quantidade', 'Tipo', 'Data de Saída'] });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Estoque');
    XLSX.writeFile(wb, 'estoque.xlsx');
}
