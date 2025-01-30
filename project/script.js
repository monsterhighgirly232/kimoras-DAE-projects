// Initialize Lucide icons
lucide.createIcons();

// Mock data for products
const products = [
    {
        id: '1',
        name: 'Y2K Butterfly Top',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
        retailer: 'shein',
        category: 'y2k'
    },
    {
        id: '2',
        name: 'Vintage Denim Jacket',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800',
        retailer: 'amazon',
        category: 'vintage'
    }
];

// State management
let state = {
    selectedCategory: null,
    selectedRetailer: null,
    isSidebarOpen: false
};

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const categoryBtns = document.querySelectorAll('[data-category]');
const retailerBtns = document.querySelectorAll('[data-retailer]');
const productGrid = document.getElementById('product-grid');
const categoryTitle = document.getElementById('category-title');

// Toggle sidebar on mobile
menuToggle.addEventListener('click', () => {
    state.isSidebarOpen = !state.isSidebarOpen;
    sidebar.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', state.isSidebarOpen);
    
    // Toggle menu icon
    const icon = menuToggle.querySelector('i');
    icon.setAttribute('data-lucide', state.isSidebarOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Filter products
function filterProducts() {
    const filtered = products.filter(product => {
        if (state.selectedCategory && product.category !== state.selectedCategory) return false;
        if (state.selectedRetailer && product.retailer !== state.selectedRetailer) return false;
        return true;
    });
    renderProducts(filtered);
}

// Render products
function renderProducts(products) {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Handle category selection
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        state.selectedCategory = state.selectedCategory === category ? null : category;
        
        // Update UI
        categoryBtns.forEach(b => b.classList.toggle('active', b.dataset.category === state.selectedCategory));
        categoryTitle.textContent = state.selectedCategory ? 
            state.selectedCategory.charAt(0).toUpperCase() + state.selectedCategory.slice(1) : 
            'All Styles';
        
        filterProducts();
    });
});

// Handle retailer selection
retailerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const retailer = btn.dataset.retailer;
        state.selectedRetailer = state.selectedRetailer === retailer ? null : retailer;
        
        // Update UI
        retailerBtns.forEach(b => b.classList.toggle('active', b.dataset.retailer === state.selectedRetailer));
        
        filterProducts();
    });
});

// Initial render
filterProducts();