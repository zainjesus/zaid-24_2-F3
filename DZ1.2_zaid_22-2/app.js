const block = document.querySelector(".block");

window.addEventListener("load", function() {
    setTimeout(moveBlock, 1000);
});
  

function moveBlock() {
    const currentPos = block.offsetLeft;
    const windowWidth = window.innerWidth;
    if (currentPos < windowWidth - block.offsetWidth) {
        block.style.left = currentPos + 10 + "px";
        setTimeout(moveBlock, 10);
    }
}
