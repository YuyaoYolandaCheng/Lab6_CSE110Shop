// Script.js

myStorage = window.localStorage;
var product_list_container = document.getElementById('product-list');
var cart_count = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => 
{
	if (!myStorage.getItem('products')){
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(data => {
				myStorage.setItem('products', JSON.stringify(data))
			})
  }
  
  if (!myStorage.getItem('in_cart')){
		myStorage.setItem('in_cart', JSON.stringify([]))
	}
	var in_cart = JSON.parse(myStorage.getItem('in_cart'));
	cart_count.innerHTML = in_cart.length;
  
  var items = JSON.parse(myStorage.getItem('products'));
	for (var i = 0; i < items.length; i++){
		var item = new ProductItem(items[i]['id'], items[i]['image'], items[i]['description'], items[i]['title'], items[i]['price']);
		product_list_container.appendChild(item);
	}	
});
