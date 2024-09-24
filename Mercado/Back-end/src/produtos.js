document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');

    try {
        const response = await fetch('http://localhost:3333/produtos'); // Substitua pelo seu servidor, se necessário
        const result = await response.json();

        if (result.success) {
            const products = result.data;
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.dataset.productId = product.id_products; // Adiciona um ID único ao elemento

                productDiv.innerHTML = `
                    <img src="${product.image_link}" alt="${product.product_name}">
                    <div class="product-name">${product.product_name}</div>
                    <div class="product-price">R$ ${product.price}</div>
                `;

                productDiv.addEventListener('click', () => {
                    window.location.href = `product-details.html?id=${product.id_products}`; // Redireciona para a página de detalhes com o ID do produto
                });

                productList.appendChild(productDiv);
            });
        } else {
            productList.innerHTML = '<p>Erro ao carregar produtos.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        productList.innerHTML = '<p>Erro ao carregar produtos.</p>';
    }
});



/*
function checkIfAdmin() {
    fetch('http://localhost:3333/usuario/info', {
        credentials: 'include' // Inclui cookies na requisição
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro na requisição');
        }
    })
    .then(data => {
        if (data.isAdmin) {
            console.log('Usuário é admin. Redirecionando...');
            window.location.href = '/Front-End/html/add-product.html'; // Redireciona para a página de adicionar produto
        } else {
            console.log('Usuário não é admin.');
            window.location.href = '/'; // Redireciona para a página inicial ou de erro
        }
    })
    .catch(error => {
        console.error('Erro ao verificar se o usuário é admin:', error);
    });
}

// Verifica se o usuário é admin quando a página carrega
document.addEventListener('DOMContentLoaded', checkIfAdmin);

*/