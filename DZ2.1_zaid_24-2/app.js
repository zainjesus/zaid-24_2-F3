const block = document.querySelector('.block');
const container = document.querySelector('.container');

let angle = 0;

window.addEventListener("load", function() {
    setTimeout(rotateBlock, 1000);
});

function rotateBlock() {
    angle++;
    const radius = (container.offsetWidth - block.offsetWidth) / -2;
    const positionX = radius * Math.cos(angle * Math.PI / 180) + container.offsetWidth / 2 - block.offsetWidth / 2;
    const positionY = radius * Math.sin(angle * Math.PI / 180) + container.offsetHeight / 2 - block.offsetHeight / 2;
    block.style.left = `${positionX}px`;
    block.style.top = `${positionY}px`;
    setTimeout(rotateBlock, 10);
}

