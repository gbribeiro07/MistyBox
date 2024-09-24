
function adicionarProduto() {
    document.getElementById('modal').style.display = 'block';
    localStorage.setItem('showElement10', 'true');
}

function openPageCart() {
    window.location.href = 'cart.html';
}

function BuyNow() {
    localStorage.setItem('showElement10', 'true');
    openPageCart();
}
            