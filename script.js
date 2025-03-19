function gerarExcel() {
    const dataRegistro = document.getElementById('data-registro').value;
    const responsavel = document.getElementById('responsavel').value;
    const material = document.getElementById('material').value;
    const dataRelatorio = document.getElementById('data-relatorio').value;
    const quantidade = document.getElementById('quantidade').value;
    const observacoes = document.getElementById('observacoes').value;

    const dados = [
        {
            "Data do Registro": dataRegistro,
            "Nome do Responsável": responsavel,
            "Nome do Material": material,
            "Data para Relatório": dataRelatorio,
            "Quantidade em Estoque": quantidade,
            "Observações": observacoes
        }
    ];

    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Relatório');

    XLSX.writeFile(workbook, 'Relatório_de_Estoque.xlsx');
}
