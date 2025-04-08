function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const registrationDate = document.getElementById('registration-date').value;
    const entryDate = document.getElementById('entry-date').value;
    const exitDate = document.getElementById('exit-date').value;

    if (itemName && itemQuantity && registrationDate && entryDate && exitDate) {
        const stockList = document.getElementById('stock-list');
        const listItem = document.createElement('li');

        const isMissing = parseInt(itemQuantity) === 0;

        listItem.innerHTML = `
            <span>Material: ${itemName}</span>
            <span>Quantidade: ${itemQuantity}</span>
            <span>Data de Registro: ${registrationDate}</span>
            <span>Data de Entrada: ${entryDate}</span>
            <span>Data de Saída: ${exitDate}</span>
            <span>${isMissing ? 'Material em Falta' : ''}</span>
            <button onclick="removeItem(this)">Remover</button>
        `;
        stockList.appendChild(listItem);

        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
        document.getElementById('registration-date').value = '';
        document.getElementById('entry-date').value = '';
        document.getElementById('exit-date').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
