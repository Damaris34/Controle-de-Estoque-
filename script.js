document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidadeMaterial = document.getElementById('quantidadeMaterial').value;
    const materialFalta = document.getElementById('materialFalta').value;

    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = dataRegistro;
    cell2.innerHTML = nomeMaterial;
    cell3.innerHTML = quantidadeMaterial;
    cell4.innerHTML = materialFalta;

    document.getElementById('stockForm').reset();
});
