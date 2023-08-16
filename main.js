const API_BASE = 'https://api.escuelajs.co/api/v1';
const filterButton1 = document.getElementById('filterButton1');
const filterButton2 = document.getElementById('filterButton2');

let productsData = [];
fetch(API_BASE + "/products")
  .then(response => response.json())
  .then(data => renderProductGrid(data))
  .catch(error => console.error('Error fetching data:', error));

function renderProductGrid(products) {

  const productListElement = document.getElementById('product-list');
  const productGrid = document.createElement("div");
  productGrid.className = "product-grid";
  products.length=6;
  products.forEach(product => {
    const productCardLink = document.createElement('a');
    productCardLink.href = `details.html?productId=${product.id}`;
    productCardLink.className = 'product-cards';


    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img class="home_img"  src="${product.images[0]}">
        <div class="home_product_group">
         <div class="home_id">${product.id}</div>
         <div class="home_product_title">${product.title}</div>
         <div class="home_product_description">Description: ${product.description}</div>
          <div class="home_product_price">Price: $${product.price}</div>
          </div>
       `;
    productCardLink.appendChild(productCard);

    productGrid.appendChild(productCardLink);
  });

  productListElement.appendChild(productGrid);
}

function filterProductsByPrice(minPrice) {
  const filteredProducts = productsData.filter(product => product.productPrice >= minPrice);
  renderProductGrid(filteredProducts);
}


filterButton1.addEventListener('click', () => filterProductsByPrice(79000));
filterButton2.addEventListener('click', () => filterProductsByPrice(24500));
