document.addEventListener('DOMContentLoaded', function() {
    const faltaMaterialSelect = document.getElementById('faltaMaterial');
    const materialFaltaGroup = document.getElementById('materialFaltaGroup');
    const quantidadeCompraGroup = document.getElementById('quantidadeCompraGroup');

    faltaMaterialSelect.addEventListener('change', function() {
        if (faltaMaterialSelect.value === 'sim') {
            materialFaltaGroup.style.display = 'block';
            quantidadeCompraGroup.style.display = 'block';
        } else {
            materialFaltaGroup.style.display = 'none';
            quantidadeCompraGroup.style.display = 'none';
        }
    });
});
