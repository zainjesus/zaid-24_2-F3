const cards = document.querySelectorAll('.card');

const getData = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json")
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
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
    });
}

getData();
