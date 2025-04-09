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
        <p><strong>Nome do Material em Falta:</strong> ${data.missingMaterialName}</p>
        <p><strong>Quantidade em Falta:</strong> ${data.missingQuantity}</p>
        <p><strong>Data de Entrada:</strong> ${data.entryDate}</p>
        <p><strong>Data de Saída:</strong> ${data.exitDate}</p>
    `;

    const opt = {
        margin: 1,
        filename: 'controle_de_materiais.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage of html2pdf
    html2pdf().from(pdfContent).set(opt).save();
}

