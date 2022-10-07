const btn = document.querySelector(".form_btn");
const city = document.querySelector(".divCity");
const temperature = document.querySelector(".divTemp");
const humidity = document.querySelector(".divHumidity");
const vent = document.querySelector(".divWind");

const myKey = "6bc83f3a2aed4821696735bc0a7cff9e";
let urlweather = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${myKey}&lang=fr&units=metric`;
fetch(urlweather).then((response) =>
  response.json().then((data) => {
    city.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"><div>${data.name}</div>`;
    temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters icon"></i> <div>${data.main.temp}°C</div `;
    humidity.innerHTML = `<i class="fa-solid fa-droplet icon"></i><div>${data.main.humidity}%</div `;
    vent.innerHTML = `<i class="fa-solid fa-wind icon"></i><div>${(
      data.wind.speed * 3.6
    ).toFixed(2)} km/h</div `; // *3.6 for km/h
  })
);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const chosenCity = document.querySelector(".form_input").value;
  urlweather = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${myKey}&lang=fr&units=metric`;
  fetch(urlweather).then((response) =>
    response
      .json()
      .then((data) => {
        city.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"><div>${data.name}</div>`;
        temperature.innerHTML = `<i class="fa-solid fa-temperature-three-quarters icon"></i> <div>${data.main.temp}°C</div `;
        humidity.innerHTML = `<i class="fa-solid fa-droplet icon"></i><div>${data.main.humidity}%</div `;
        vent.innerHTML = `<i class="fa-solid fa-wind icon"></i><div>${(
          data.wind.speed * 3.6
        ).toFixed(2)} km/h</div `;
      })
      .catch(() => {
        alert("City not found");
        document.querySelector(".form_input").value = "";
      })
  );
});
