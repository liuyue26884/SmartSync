const product = [
    {
        id: 0,
        image: 'glasses1.png',
        title: 'Golden Modern Glasses',
        price: 50,
    },

    {
        id: 1,
        image: 'glasses2.png',
        title: 'Circle Lens Glasses',
        price: 30,
    },

    {
        id: 2,
        image: 'glasses3.png',
        title: 'Lexury Lens Glasses',
        price: 100,
    },

    {
        id: 3,
        image: 'glasses4.png',
        title: 'Normal Lens Glasses',
        price: 20,
    },

    {
        id: 4,
        image: 'glasses5.png',
        title: 'Tradisionalical Glasses',
        price: 60,
    },

    {
        id: 5,
        image: 'glasses6.png',
        title: 'Retro blackgrey Glasses',
        price: 50,
    },

    {
        id: 6,
        image: 'glasses7.png',
        title: 'Half-rimmed Glasses',
        price: 40,
    },

    {
        id: 7,
        image: 'glasses8.png',
        title: 'Golden Affluence Glasses',
        price: 70,
    },

    {
        id: 8,
        image: 'contactlens1.png',
        title: 'Elegant Contact Lens',
        price: 200,
    },

    {
        id: 9,
        image: 'contactlens2.png',
        title: 'A++ Contact Lens',
        price: 80,
    }

];

const categories = [...new Set(product.map((item) => item.id))];
let i = 0;
let total = 0;

document.getElementById('root').innerHTML = categories.map((id) => {
    const { image, title, price } = product.find((item) => item.id === id);
    return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>RM ${price}.00</h2>
        <button onclick='addtocart(${id})'>Add to Cart</button>
      </div>
    </div>`;
}).join('');

var cart = [];

function addtocart(id) {
    cart.push(product.find((item) => item.id === id));
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let t = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cart_Item').innerHTML = "Empty Cart";
        document.getElementById("total").innerHTML = "RM 0.00";
    } else {
        let total = 0;
        document.getElementById("cart_Item").innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "RM " + total.toFixed(2);
            return `
                <div class='cart-item'>
                    <div class='row img'>
                        <img class='rowing' src='${image}' alt='${title}'>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>RM ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${t++})'></i>
                </div>`;
        }).join('');
    }
}
