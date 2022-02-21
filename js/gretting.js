const   form        = document.querySelector(".js-form");
        f_input     = form.querySelector(".inp");
        greeting    = document.querySelector(".js-greeting");

const USER_NAME = "userName";

function saveName(currentValue) {
    localStorage.setItem("USER_NAME", currentValue);
}

function handleSubmit(event) {
    const currentValue = f_input.value;
    saveName(currentValue);
    loadName();
    event.preventDefault();
}

function askForName() {
    form.classList.add("show");
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(userName) {
    const time = new Date().getHours();
    let hi;
    if(time > 3 && time <= 12) {
        hi = "Good morning";
    }else if(time > 12 && time <= 17) {
        hi = "Good afternoon";
    }else{
        hi = "Good evening";
    }
    greeting.innerHTML = `<h2 class="txt">${hi}, ${userName}</h2>`;    
}

function loadName() {
    const userName = localStorage.getItem("USER_NAME");
    if(userName === null){
        askForName();
    } else {
        paintGreeting(userName);
        form.classList.remove("show");
        greeting.classList.add("show");
    }
}

function init() {
    loadName();
}
init();