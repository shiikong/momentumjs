const   clockContainer = document.querySelector(".js-clock"),
        clockTitle     = clockContainer.querySelector("h1"),
        fn_clock       = setInterval(init, 500);

function init() {
    const today = new Date();
    ////////////////////////////// new source version
    const h = String(today.getHours()).padStart(2,"0");
    const m = String(today.getMinutes()).padStart(2,"0");
    const s = String(today.getSeconds()).padStart(2,"0");
    clockTitle.innerText = `${h}:${m}:${s}`;

    ////////////////////////////// old source version
    // const h = today.getHours();
    // const m = today.getMinutes();
    // const s = today.getSeconds();
    // clockTitle.innerText = `${ h<10 ? `0${h}` : `${h}` }:${
    //     m<10 ? `0${m}` : `${m}` }:${
    //     s<10 ? `0${s}` : `${s}` }`;

}
init();