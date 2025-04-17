document.getElementById('estoqueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dataRegistro = document.getElementById('dataRegistro').value;
    const localizacao = document.getElementById('localizacao').value;
    const saidaTratamento = document.getElementById('saidaTratamento').value;
    const cozinha = document.getElementById('cozinha').value;
    const producao = document.getElementById('producao').value;
    const administracao = document.getElementById('administracao').value;
    const recebimento = document.getElementById('recebimento').value;
    const foto = document.getElementById('foto').files[0];

    // Aqui você pode adicionar a lógica para salvar os dados, por exemplo, enviando para um servidor ou armazenando localmente.
    console.log('Data de Registro:', dataRegistro);
    console.log('Localização dos pontos:', localizacao);
    console.log('Saída de Tratamento:', saidaTratamento);
    console.log('Cozinha:', cozinha);
    console.log('Produção:', producao);
    console.log('Administração:', administracao);
    console.log('Recebimento:', recebimento);
    console.log('Foto:', foto);

    alert('Dados salvos com sucesso!');
});
