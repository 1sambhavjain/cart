let basket = JSON.parse(localStorage.getItem("data")) || [];

let label = document.getElementById("label")
let shopingCart = document.getElementById("shoping-cart")
console.log(shopingCart);

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)

}

calculation()


let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shopingCart.innerHTML = basket.map((e) => {
            let { id, item, price } = e;
            let search = shopItemsData.find((y) => y.id === id || [])
            return `
         <div class="cart-item">
         
           <img scr="" alt="abhi nhi h mere pass"/>
            <div class="cart-price-close">
            <h3>${search.name}</h3>
            <p>X</p>
            </div>
            
            <p>${item}</p>
            
            </div>
            </div>
            <div>
            `
        }).join(""));

    }
    else {
        shopingCart.innerHTML = ``;
        label.innerHTML = `<h2>cart is empty</h2>
            <a href="index.html">
            <button class="Homebtn">back to home</button>
            </a>`
    }
}
generateCartItems()


