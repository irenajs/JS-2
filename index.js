const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) =>

    `<div class="goods-item">
      <img src= "${img = "https://storage.vsemayki.ru/images/0/1/1357/1357985/previews/people_4_manshortfull_front_white_250.jpg"}">
      <h3>${title}</h3>
      <p>${price}</p>
      <button class="buy_btn">Купить</button>
    </div>`;


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
}

window.onload = () => {
    renderGoodsList(goods);
};


