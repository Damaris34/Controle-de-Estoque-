document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const quantidadeMaterial = document.getElementById('quantidadeMaterial').value;
    const materialFalta = document.getElementById('materialFalta').value;

    if (nomeMaterial.trim() === '' || quantidadeMaterial <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = dataRegistro;
    cell2.innerHTML = nomeMaterial;
    cell3.innerHTML = quantidadeMaterial;
    cell4.innerHTML = materialFalta;
    cell5.innerHTML = `
        <div class="actions">
            <button class="edit" onclick="editRow(this)">Editar</button>
            <button class="delete" onclick="deleteRow(this)">Excluir</button>
        </div>
    `;

    document.getElementById('stockForm').reset();
});

function editRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const dataRegistro = cells[0].innerHTML;
    const nomeMaterial = cells[1].innerHTML;
    const quantidadeMaterial = cells[2].innerHTML;
    const materialFalta = cells[3].innerHTML;

    document.getElementById('dataRegistro').value = dataRegistro;
    document.getElementById('nomeMaterial').value = nomeMaterial;
    document.getElementById('quantidadeMaterial').value = quantidadeMaterial;
    document.getElementById('materialFalta').value = materialFalta;

    row.remove();
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
