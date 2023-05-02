async function getAllProducts(){
    var result = await fetch("https://localhost:7041/api/Product");
    console.log(result);

    if(result.status !== 200){
        console.log('Ошибка: ' + result.status);
        return;
    }

    var data = await result.json();
    for (let i = 0; i < data.length; i++){
        console.log(data[i]);
        addProductCard(data[i]);
    }
}
getAllProducts();



 function addProductCard(Products){
    let list = document.getElementById('Products-list');

    let card = document.createElement('div');
    card.className = 'card';

    card.innerHTML =
    '<img src="' +'https://prezentacii.org/upload/cloud/18/09/75772/images/screen11.jpg '+'" alt="Atomic Heart" style="width:100%">' +
    '<h1>' + Products.name + '</h1>' +
    '<p class="price">' + Products.price + '</p>' +
    '<p>' + Products.description + '</p>' +
    '<p><button>Добавить в корзину</button></p>';
    
    list.appendChild(card);
 }