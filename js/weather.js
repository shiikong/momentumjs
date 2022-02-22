//using https://openweathermap.org/current

const API_KEY = "76f04d458c59bb274d5efe454183d524";

function onGeoSuc(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(`${lat},${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    // console.log(url);

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector(".js-weather");
            console.log(data);
            const desc = data.weather[0].description;
            const place = data.name;
            weather.innerText=`${place}\n${desc}`;
        });
}

function onGeoErr(error) {
    alert("ERROR");
}

navigator.geolocation.getCurrentPosition(onGeoSuc, onGeoErr);