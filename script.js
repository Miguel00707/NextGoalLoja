// Carrossel de banners (simplificado)
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (para versões futuras)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    // Adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            alert(`${productName} adicionado ao carrinho!\nPreço: ${productPrice}`);
            
            // Aqui você pode adicionar lógica para atualizar o carrinho
        });
    });
    
    // Simulação de busca
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Buscando por: ${searchInput.value}`);
            // Aqui você implementaria a lógica de busca real
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Buscando por: ${searchInput.value}`);
        }
    });
});
