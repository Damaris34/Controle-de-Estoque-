function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemQuantity) {
        const stockList = document.getElementById('stock-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `${itemName} - Quantidade: ${itemQuantity} <button onclick="removeItem(this)">Remover</button>`;
        stockList.appendChild(listItem);

        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
