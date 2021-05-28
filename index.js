class GoodItem {
    constructor(title = 'Товар', price = 'Цена по запросу', img = 'img/belt.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class="buy_btn">Купить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
            title: 'Shirt',
            price: 150,
            img: "img/shirt.jpeg"
        },
        {
            title: 'Socks',
            price: 50,
            img: 'img/socks.jpg'
        },
        {
            title: 'Jacket',
            price: 350,
            img: 'img/jacket.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
            img: 'img/shoes.jpg'
        },
        {
            price: 250,
            img: 'img/snikers.jpg'
        },
        {
            title: 'Bag',
            img: 'img/bag.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
            img: 'img/snikers.jpg'
        },
        {
            title: 'Trousers',
            price: 250,
            img: 'img/trousers.jpg'
        },
        {}
        ]
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}

// Класс элемента корзины
class BasketItem {
    constructor(title, price, img, link) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.link = link;
    }
    render() {

    }
}
// Класс корзины
class Basket {
    constructor() {
        this.addGoods = [];
        this.deletedGoods = [];
    }
    addToBasket() { }
    deleteFromBasket() { }
    calcBasket() { }
    isOrder() { }
    render() { }
    openBasket() { }
}

const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
    list.render();
    list.calcAllGoods();
};