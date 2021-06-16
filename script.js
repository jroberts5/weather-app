/*
const notification = document.querySelector(".notification");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDesc = document.querySelector(".weather-description");
const temp = document.querySelector(".temperature");
const weatherLocation = document.querySelector(".location");

*/

const weatherLocation = document.querySelector(".location");


let weather = {
    //Calls apt,converts to json then sends to method for using data
    apiKey: "67b201ca367e982b4a770f1040112118",
    getWeather: function (city) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    // Takes data from api, assigns to variables and set attributes and vales
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "° C";
        document.querySelector(".weather-display").classList.remove("load");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?$" + name + "')";
    },
    citySearch: function () {
        this.getWeather(document.querySelector(".search-bar").value);
    }
    
}
//Adds event listener for when enter key is pressed
document.querySelector(".search button").addEventListener("click", function () {
    weather.citySearch();

})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.citySearch();
    }
})

weather.getWeather("Charlotte");