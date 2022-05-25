const btn = document.querySelector("#buttonform");
const city = document.querySelector(".divCity");
const temperature = document.querySelector(".divTemp");
const humidity = document.querySelector(".divHumidity");
const vent = document.querySelector(".divWind");
const icn = document.querySelector(".icone");

const maKey = "6bc83f3a2aed4821696735bc0a7cff9e";
let urlweather = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${maKey}&lang=fr&units=metric`;
fetch(urlweather).then((response =>
    response.json().then((data) => {
        console.log(data);
        city.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"><div>${data.name}</div>`;
        temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters iconeBox"></i> <div>${data.main.temp}°C</div `;
        humidity.innerHTML = `<i class="fa-solid fa-droplet iconeBox"></i><div>${data.main.humidity}%</div `;
        vent.innerHTML = `<i class="fa-solid fa-wind iconeBox"></i><div>${(data.wind.speed*3.6).toFixed(2)} km/h</div `; // *3.6 pour avoir la valeur en km/h
        //.toFixed sert à fixer un nombre de décimales max
    })
));


btn.addEventListener("click", function () { 
    const laVille = document.getElementById("citynput").value; // faire attention à bien le déclarer ici car la valeur de l'input se remplie à ce moment. On suppose que l'utilisateur l'a renseignée.
    urlweather = `https://api.openweathermap.org/data/2.5/weather?q=${laVille}&appid=${maKey}&lang=fr&units=metric`;
    fetch(urlweather).then((response =>
        response.json().then((data) => {
            console.log(data);
            city.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"><div>${data.name}</div>`;
            temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters iconeBox"></i> <div>${data.main.temp}°C</div `;
            humidity.innerHTML = `<i class="fa-solid fa-droplet iconeBox"></i><div>${data.main.humidity}%</div `;
            vent.innerHTML = `<i class="fa-solid fa-wind iconeBox"></i><div>${(data.wind.speed*3.6).toFixed(2)} km/h</div `; // *3.6 pour avoir la valeur en km/h
        })
    ))
});