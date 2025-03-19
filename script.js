function exibirInformacoes() {
    const data = document.getElementById('data').value;
    const responsavel = document.getElementById('responsavel').value;
    const material = document.getElementById('material').value;
    const quantidade = document.getElementById('quantidade').value;
    const materialFalta = document.getElementById('material-falta').value;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Nome do Responsável:</strong> ${responsavel}</p>
        <p><strong>Nome do Material:</strong> ${material}</p>
        <p><strong>Quantidade Utilizada:</strong> ${quantidade}</p>
        <p><strong>Material em Falta:</strong> ${materialFalta}</p>
    `;
}
