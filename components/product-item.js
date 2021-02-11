// product-item.js

class ProductItem extends HTMLElement 
{
	constructor(id, image, description, title, price)
	{
		super();
		
		var shadow = this.attachShadow({mode: 'open'});
    
    myStorage = window.localStorage;
    var cart_count = document.getElementById('cart-count');
    var in_cart = JSON.parse(myStorage.getItem('in_cart'));
    var list = document.createElement('list');
    var img = document.createElement('img');
    var name = document.createElement('p');
    var price_tag = document.createElement('p');
    var click = document.createElement('button');


    list.setAttribute('class', 'product');
    
    img.alt = description;
		img.src = image;
		
    name.innerHTML = title;
    name.setAttribute('class', 'title');
		
    price_tag.innerHTML = '$' + price;
    price_tag.setAttribute('class', 'price');
		
    if(in_cart.includes(id)){
      click.innerHTML = "Remove from Cart";
    }else{
      click.innerHTML = "Add to Cart";
    }

		click.onclick = function (){
      in_cart = JSON.parse(myStorage.getItem('in_cart'));
			if (click.innerHTML == "Add to Cart"){
        alert("added");
				click.innerHTML = "Remove from Cart";
				cart_count.innerHTML = parseInt(cart_count.innerHTML) + 1;
				in_cart.push(id);
			}
			else{
        alert("removed");
				click.innerHTML = "Add to Cart";
				cart_count.innerHTML = parseInt(cart_count.innerHTML) - 1;
				in_cart.splice(in_cart.indexOf(id), 1);
      }
      myStorage.setItem("in_cart", JSON.stringify(in_cart));
		}
    
    list.appendChild(img);
		list.appendChild(name);
		list.appendChild(price_tag);
    list.appendChild(click);
    
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./styles/styles.css";
    document.querySelector("head").appendChild(link);
		shadow.appendChild(link);
    shadow.appendChild(list);
	}
}

customElements.define('product-item', ProductItem);