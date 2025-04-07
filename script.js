// scripts.js
function gerarPDF() {
    const dataRegistro = document.getElementById('dataRegistro').value;
    const nomeMaterial = document.getElementById('nomeMaterial').value;
    const faltaMaterial = document.getElementById('faltaMaterial').value;
    const nomeMaterialFalta = document.getElementById('nomeMaterialFalta').value;
    const quantidadeCompra = document.getElementById('quantidadeCompra').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Controle de Material - ${new Date().toLocaleDateString()}`, 10, 10);
    doc.text(`Data de Registro: ${dataRegistro}`, 10, 20);
    doc.text(`Nome do Material: ${nomeMaterial}`, 10, 30);
    doc.text(`Falta de Material: ${faltaMaterial === 'sim' ? 'Sim' : 'Não'}`, 10, 40);

    if (faltaMaterial === 'sim') {
        doc.text(`Nome do Material em Falta: ${nomeMaterialFalta}`, 10, 50);
        doc.text(`Quantidade para Compra: ${quantidadeCompra}`, 10, 60);
    }

    doc.save('controle_material.pdf');
}
