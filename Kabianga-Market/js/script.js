// ===== Dark Mode Toggle =====
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
}

// ===== Dummy Product Data =====
const products = [
  { name: 'Sport Shoes', price: 25, image: 'assets/images/shoes.jpg' },
  { name: 'Kabianga Hoodie', price: 18, image: 'assets/images/hoodie.jpg' },
  { name: 'Classic Perfume', price: 12, image: 'assets/images/perfume.jpg' },
  { name: 'Casual T-Shirt', price: 10, image: 'assets/images/tshirt.jpg' },
  { name: 'Fresh Burger', price: 8, image: 'assets/images/food.jpg' }
];

// ===== Load Shop Items =====
const shopGrid = document.getElementById('shopGrid');
if (shopGrid) {
  shopGrid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>High-quality product from Kabianga Market.</p>
      <span class="price">$${p.price}</span>
      <button class="btn" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    </div>
  `).join('');
}

// ===== Cart System (LocalStorage) =====
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

const cartItemsDiv = document.getElementById('cartItems');
if (cartItemsDiv) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItemsDiv.innerHTML = cart.map(item => `
      <div class="product-card">
        <h3>${item.name}</h3>
        <span class="price">$${item.price}</span>
      </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = `$${total}`;
  }
}

// ===== Contact Form (Fake Submit) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting Kabianga Market!');
    contactForm.reset();
  });
}
