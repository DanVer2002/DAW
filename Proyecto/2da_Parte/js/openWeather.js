
fetch("https://api.openweathermap.org/data/2.5/weather?q=Tlaxcala&units=metric&appid=d07f26cc0d768ad95e37d9bde2a0b0f0")
  .then((response) => {
    return response.json();
  })

  .then((data) => this.displayWeather(data));

  function displayWeather(data) {
    const { name } = data;
    const { icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Clima en " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humedad: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Viento: " + speed + " km/h";
  }
