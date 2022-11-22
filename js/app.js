window.addEventListener("load", () => {
  let lon;
  let lat;

  let temperaturaValor = document.getElementById("temperatura-valor");
  // let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

  let ubicacion = document.getElementById("ubicacion");
  let icono = document.getElementById("icono");

  let vientoVelocidad = document.getElementById("viento-velocidad");

  let pais = document.getElementById("pais");

  let humidity = document.getElementById("humidity");

  let visibility = document.getElementById("visibility");

  let pressure = document.getElementById("pressure");

  let body = document.getElementById("body");

  const form = document.getElementById("search-form");
  const searchBox = document.getElementById("search");

  if (navigator.geolocation) {
    console.log(navigator);
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition((posicion) => {
      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9363411c6c37e902fe367c563c619623`;
      console.log(url);
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let temp = Math.round(data.main.temp);
          temperaturaValor.textContent = `${temp - 273}°C`;
          ubicacion.textContent = data.name;
          vientoVelocidad.textContent = `${(data.wind.speed * 3, 6)} Km/h`;
          pais.textContent = data.sys.country;
          humidity.textContent = `${data.main.humidity}%`;
          visibility.textContent = `${data.visibility / 1000} Km`;
          pressure.textContent = `${data.main.pressure} hPa`;
          switch (data.weather[0].icon) {
            case "01n":
              icono.src = "img/animated/night.svg";
              body.style.background =
                "linear-gradient(to right top, #000428, #004e92)";
              break;
            case "02n":
              icono.src = "img/animated/cloudy-night-3.svg";
              body.style.background =
                "linear-gradient(to right top, #000428, #004e92)";
              break;
            case "03n":
              icono.src = "img/animated/cloudy.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "04n":
              icono.src = "img/animated/cloudy.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "09n":
              icono.src = "img/animated/rainy-6.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "10n":
              icono.src = "img/animated/rainy-6.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "11n":
              icono.src = "img/animated/thunder.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "13n":
              icono.src = "img/animated/snowy-6.svg";
              body.style.background =
                "linear-gradient(to right top, #000428, #004e92)";
              break;
            case "01d":
              icono.src = "img/animated/day.svg";
              body.style.background =
                "linear-gradient(to right bottom, #00b4db, #0083b0)";
              break;
            case "02d":
              icono.src = "img/animated/cloudy-day-3.svg";
              body.style.background =
                "linear-gradient(to right bottom, #00b4db, #0083b0)";
              break;
            case "03d":
              icono.src = "img/animated/cloudy.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "04d":
              icono.src = "img/animated/cloudy.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "09d":
              icono.src = "img/animated/rainy-6.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "10d":
              icono.src = "img/animated/rainy-3.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "11d":
              icono.src = "img/animated/thunder.svg";
              body.style.background =
                "linear-gradient(to right top, #757f9a, #d7dde8)";
              break;
            case "13d":
              icono.src = "img/animated/snowy-6.svg";
              body.style.background =
                "linear-gradient(to right bottom, #00b4db, #0083b0)";
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  function onSubmit(event) {
    event.preventDefault();
    search(searchBox.value);
  }

  form.addEventListener("submit", onSubmit);

  function search(local) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=9363411c6c37e902fe367c563c619623`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        ubicacion.innerHTML = data.name;
        pais.innerHTML = data.sys.country;
        temperaturaValor.innerHTML = `${Math.ceil(data.main.temp - 273.15)}°C`;
        vientoVelocidad.innerHTML = `${(data.wind.speed * 3, 6)} Km/h`;
        humidity.innerHTML = `${data.main.humidity}%`;
        visibility.innerHTML = `${data.visibility / 1000} Km`;
        pressure.innerHTML = `${data.main.pressure} hPa`;
        icono.innerHTML = data.weather[0].icon;
        console.log(data.weather[0].icon);
        switch (data.weather[0].icon) {
          case "01n":
            icono.src = "img/animated/night.svg";
            body.style.background =
              "linear-gradient(to right top, #000428, #004e92)";
            break;
          case "02n":
            icono.src = "img/animated/cloudy-night-3.svg";
            body.style.background =
              "linear-gradient(to right top, #000428, #004e92)";
            break;
          case "03n":
            icono.src = "img/animated/cloudy.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "04n":
            icono.src = "img/animated/cloudy.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "09n":
            icono.src = "img/animated/rainy-6.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "10n":
            icono.src = "img/animated/rainy-6.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "11n":
            icono.src = "img/animated/thunder.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "13n":
            icono.src = "img/animated/snowy-6.svg";
            body.style.background =
              "linear-gradient(to right top, #000428, #004e92)";
            break;
          case "01d":
            icono.src = "img/animated/day.svg";
            body.style.background =
              "linear-gradient(to right bottom, #00b4db, #0083b0)";
            break;
          case "02d":
            icono.src = "img/animated/cloudy-day-3.svg";
            body.style.background =
              "linear-gradient(to right bottom, #00b4db, #0083b0)";
            break;
          case "03d":
            icono.src = "img/animated/cloudy.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "04d":
            icono.src = "img/animated/cloudy.svg";
            body.style.background =
              " linear-gradient(to right top, #757f9a, #d7dde8) ";
            break;
          case "09d":
            icono.src = "img/animated/rainy-6.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "10d":
            icono.src = "img/animated/rainy-3.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "11d":
            icono.src = "img/animated/thunder.svg";
            body.style.background =
              "linear-gradient(to right top, #757f9a, #d7dde8)";
            break;
          case "13d":
            icono.src = "img/animated/snowy-6.svg";
            body.style.background =
              "linear-gradient(to right bottom, #00b4db, #0083b0)";
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
