document.getElementById('foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fotoPreview').src = e.target.result;
            document.getElementById('fotoPreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const dataRegistro = document.getElementById('dataRegistro').value;
    const localizacao = document.getElementById('localizacao').value;
    const saidaTratamento = document.getElementById('saidaTratamento').value;
    const cozinha = document.getElementById('cozinha').value;
    const producao = document.getElementById('producao').value;
    const administracao = document.getElementById('administracao').value;
    const recebimento = document.getElementById('recebimento').value;
    const foto = document.getElementById('fotoPreview').src;

    doc.text('Controle de Estoque', 10, 10);
    doc.text(`Data de Registro: ${dataRegistro}`, 10, 20);
    doc.text(`Localização dos pontos: ${localizacao}`, 10, 30);
    doc.text(`Saída de Tratamento: ${saidaTratamento}`, 10, 40);
    doc.text(`Cozinha: ${cozinha}`, 10, 50);
    doc.text(`Produção: ${producao}`, 10, 60);
    doc.text(`Administração: ${administracao}`, 10, 70);
    doc.text(`Recebimento: ${recebimento}`, 10, 80);

    if (foto) {
        doc.addImage(foto, 'JPEG', 10, 90, 190, 100);
    }

    doc.save('controle_de_estoque.pdf');
}
