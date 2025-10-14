const products = [
    { name: "طرق روبوكس", desc: "طريقة روبوكس يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "rob.webp" },
    { name: "باين", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "ح.webp" },
    { name: "بودا", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "Buddha_Fruit.webp" },
    { name: "ليو", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "l.jpg" },
    { name: "جاز", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "Gas_Fruit.webp" },
    { name: "كنترول", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "Control_Fruit.webp" },
    { name: "رمبيل", desc: "ابلوكس افروت يتم الاتفاق علا السعر بديسكورد مش شرط فلوس", img: "ف.webp" },
];

const productsContainer = document.getElementById('productsContainer');
products.forEach((product, idx) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <button class="add-btn" onclick="addToCart(${idx})">أضف إلى السلة</button>
    `;
    productsContainer.appendChild(div);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(idx) {
    cart.push(products[idx]);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotif("تمت إضافة المنتج إلى السلة!");
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}
function showNotif(msg) {
    const notif = document.getElementById('notif');
    notif.textContent = msg;
    notif.style.display = 'block';
    setTimeout(() => notif.style.display = 'none', 1500);
}

// عند تحميل الصفحة
updateCartCount();