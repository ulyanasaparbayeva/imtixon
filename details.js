const productDetailsElement = document.getElementById('product-details');

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');




  fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
  .then(response => response.json())
  .then(data => displayProductDetails(data))
  .catch(error => console.error('Error fetching user data:', error));


function displayProductDetails(product) {
  productDetailsElement.innerHTML = `
   <div class="details_group">
   <div>
   <img class="details_img"  src="${product.images[0]}">
    </div>
    <div class="details_all"> 
    <div>Id: ${product.id}</div>
         <div class="details_title">${product.title}</div>
         <div class="details_description">Description: ${product.description}</div>
         <div class="details_price_title">Цена</div>
         <div class="details_price_group">
          <div class="details_price">${product.price}₽</div>
          <del class="details_discount">37000₽</del>
             </div>
     <button id="addToCartButton" class="details_button">
      КОРЗИНКА
    </button>
     </div>
      </div>
     `;
  const addToCartButton = document.getElementById('addToCartButton');
  addToCartButton.addEventListener('click', () => {
    localStorage.setItem('cartProduct', JSON.stringify(product));
    window.location.href = 'cart.html';
  });
}