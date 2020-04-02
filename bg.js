const   body    = document.querySelector("body");
        content = document.querySelector(".content");

// const IMG_NUM = 3;

function paintImg(imgNum) {
    const img = new Image();
    img.src = `./images/bg${imgNum}.jpg`;
    content.style.backgroundImage = `url(${img.src})`;
}

function genRandom() {
    const num = Math.floor(Math.random() * 5) + 1; // 1~5 사이 랜덤 후 내림
    return num;
}

function init() {
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();