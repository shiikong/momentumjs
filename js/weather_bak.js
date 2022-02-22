const weather = document.querySelector(".js-weather");

const API_KEY = "76f04d458c59bb274d5efe454183d524";
const COORDS = "coords";

function getWeather(lat, lon) {
    // 가져올 데이터 url에서 얻기
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    //https://api.openweathermap.org/data/2.5/weather?lat=37.578325&lon=126.894688&appid=76f04d458c59bb274d5efe454183d524&lang=kr&units=metric
    )
        .then(function(response) {
            // fetch 완료 후 then 실행
            console.log(response);
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}℃ @ ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();