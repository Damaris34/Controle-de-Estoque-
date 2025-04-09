document.getElementById('materialShortage').addEventListener('change', function() {
    const missingMaterialGroup = document.getElementById('missingMaterialGroup');
    if (this.value === 'sim') {
        missingMaterialGroup.style.display = 'block';
    } else {
        missingMaterialGroup.style.display = 'none';
    }
});

function saveAsPDF() {
    const form = document.getElementById('materialForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const pdfContent = `
        <h1>Controle de Materiais</h1>
        <p><strong>Data de Registro:</strong> ${data.registrationDate}</p>
        <p><strong>Nome do Material:</strong> ${data.materialName}</p>
        <p><strong>Quantidade:</strong> ${data.quantity}</p>
        <p><strong>Falta de Material:</strong> ${data.materialShortage}</p>
        ${data.materialShortage === 'sim' ? `<p><strong>Nome do Material em Falta:</strong> ${data.missingMaterialName}</p>` : ''}
        <p><strong>Data de Recebimento:</strong> ${data.receivedDate}</p>
    `;

    const opt = {
        margin: 1,
        filename: 'controle_de_materiais.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(pdfContent).set(opt).save();
}

// Inicialmente, esconde o campo de material em falta
document.getElementById('missingMaterialGroup').style.display = 'none';
