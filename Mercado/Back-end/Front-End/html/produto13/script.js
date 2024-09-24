
function adicionarProduto() {
    document.getElementById('modal').style.display = 'block';
    localStorage.setItem('showElement13', 'true');
}

function openPageCart() {
    window.location.href = 'cart.html';
}

function BuyNow() {
    localStorage.setItem('showElement13', 'true');
    openPageCart();
}
            