

let cart = document.getElementById("cart")

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (cart.innerHTML = shopItemsData.map((i) => {
        // now problem is every time write like i.name,i,id
        // so solution is 
        let { id, name, price, desc, img } = i;

let search = basket.find((x)=> x.id === id)|| []
        return `
        <div class="card" style="width: 18rem;" id= ${id}>
    <img class="card-img-top" src=${img} alt="Card image cap">
    <div class="card-body">
        <p class="card-text productName" >${name}</p>
            <p class="productDesc">quick example text to build on the card title and make up the bulk of the
                card's content.Some</p>
    </div>
    <div class="price">
        <div class="">${price}</div>
        <div class="funtion">
            <p class="decriment"  onclick="decrement(${id})">-</p>
            <p class="value" id="quantity_${id}">${search.item === undefined ? 0: search.item}</p>
            <p class="incriment" onclick="increment(${id})">+</p>
        </div>
    </div>
    </div>`
    }).join(""))
}
generateShop()




let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  localStorage.setItem("data",JSON.stringify(basket))
    // generateCartItems();
    update(selectedItem.id);
}



let decrement = (id) => {
    
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }

    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedItem.id);
    basket = basket.fillter((x)=>x.item !==0)
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    let quantityElement = document.getElementById(`quantity_${id}`);
    
    if (search) {
        quantityElement.innerHTML = search.item;
    }
    calculation()
}


let calculation = ()=>{
let cartIcon = document.getElementById("cartAmount")
cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=> x + y ,0 )

}

calculation()



