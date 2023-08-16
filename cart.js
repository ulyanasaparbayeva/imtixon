const cartProductDetailsElement = document.getElementById('cart-product-details');
const removeButton = document.getElementById('removeButton'); // Add this line

const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

const shouldHideCart = localStorage.getItem('shouldHideCart');


if (cartProduct) {
  cartProductDetailsElement.innerHTML = `
      <div class="cart_header">
        <h2>Корзина</h2>
        <div>
        <i class='bx bx-x'></i>
        </div>
       </div>
        <div class="border"></div>
       <div>
       <div class="cart_price">
       <div class="cart_info">
        <img class="cart_img" src="${cartProduct.images[0]}">
            <div>
        <div class="cart_title">${cartProduct.title}</div>
         <div class="cart_link">+ Gift:<a href="#">"Prilozhenie k zamkam Golden Service"</a></div>
         <div>
         <div class="cart_counter">
         <div style="display:flex;align-items: center;"> <i class='bx bx-minus' style="color: #C4CDD5"></i></div>
         <div class="cart_number">
            2
           </div>
           <div style="display:flex;align-items: center;">
           <i class='bx bx-plus' style="color: black;"></i>
                </div>
         </div>
         </div>
        <div>
     </div>
      </div>
        </div>
      <div class="cart_remove" id="removeButton">
      <i class='bx bxs-trash'></i>
      <span>Удалить</span>
        <div class="cart__price">${cartProduct.price}₽</div>
      </div>
         </div>
           <div class="cart_total"><span>Итого:</span>: 66 000₽</div>
            <div class="cart_btns">
            <button class="btn_remove">Оформить заказ</button>
            <button class="btn_continue">Продолжить покупки</button>
             </div>
       </div
     `;

  const removeButton = document.getElementById('removeButton'); // Add this line after setting innerHTML

  removeButton.addEventListener('click', () => {
    console.log('Button clicked!');
    const cartContainer = cartProductDetailsElement.querySelector('.cart_header').parentNode;
    if (cartContainer) {
      cartContainer.remove();
    }
    localStorage.setItem('shouldHideCart', 'true');
  });
} else {
  cartProductDetailsElement.style.display = 'none';
}