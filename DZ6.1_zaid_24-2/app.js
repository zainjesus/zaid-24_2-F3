const cards = document.querySelectorAll('.card');

getData = () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const obj = products[i];
            card.querySelector('img').src = obj.img;
            card.querySelector('.name').textContent = obj.title;
            card.querySelector('.now__price').textContent = obj.price;
            card.querySelector('.sale').textContent = obj.sale;
            card.querySelector('.description').textContent = obj.description;
            card.querySelector('.reviews').textContent = obj.reviews;
        }
    })
    .catch(error => console.error(error));
}

getData()
