function adicionarLinha() {
    const tableBody = document.querySelector('#estoqueTable tbody');
    const newRow = document.createElement('tr');

    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const materialFalta = document.getElementById('materialFalta').value;
    const fotoInput = document.getElementById('foto');

    if (fotoInput.files.length > 0) {
        const fotoURL = URL.createObjectURL(fotoInput.files[0]);
        newRow.innerHTML = `
            <td>${dataRegistro}</td>
            <td>${nomeMaterial}</td>
            <td>${materialFalta}</td>
            <td><img src="${fotoURL}" alt="Foto do Material"></td>
        `;
        tableBody.appendChild(newRow);
    } else {
        alert("Por favor, selecione uma foto.");
    }
}

document.getElementById('gerarPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Adicionar título e data
    const date = new Date().toLocaleDateString();
    doc.setFontSize
