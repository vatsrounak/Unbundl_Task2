const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Dairy Milk Moose',
        price: 85,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Dairy Milk Oreo',
        price: 85,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: 'Dairy Milk fruit & Nut ',
        price: 75,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Dairy Milk Silk',
        price: 45,
    }
    ,{
        id: 4,
        image: 'image/a1.jpg',
        title: 'Dairy Milk Minis',
        price: 95,
    },
    {
        id: 5,
        image: 'image/a2.jpg',
        title: '5Star',
        price: 105,
    },
    {
        id: 6,
        image: 'image/a3.jpg',
        title: 'Perk',
        price: 175,
    },
    {
        id: 7,
        image: 'image/a4.jpg',
        title: 'KitKat',
        price: 55,
    },
    {
        id: 8,
        image: 'image/a5.jpg',
        title: 'Kinder Joy',
        price: 99,
    },
    

];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>` +
        "<button onclick='addtocart(" + i++ + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    if (cart.length < 8) {
        cart.push({ ...categories[a] });
        displaycart();
    } else {
        alert("Your cart is full. You can't add more than 8 items.");
    }
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0,
        total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = 'Your cart is empty';
        document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
    } else {
        document.getElementById('cartItem').innerHTML = cart
            .map((items) => {
                var { image, title, price } = items;
                total = total + price;
                document.getElementById('total').innerHTML =
                    '$ ' + total + '.00';
                return (
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>₹ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" +
                    j++ +
                    ")'></i></div>"
                );
            })
            .join('');
    }
}
