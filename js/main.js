"use strict";
// let weatherInput = document.getElementById("weather")


// weatherInput.addEventListener("input",function (){
//     for (let i = 0; i < response.length; i++) {
//         async function z () {
//             let Data =   await fetch(`https://api.weatherapi.com/v1/search.json?key=390c8aa3c29f4afd920190406241501&q=${weatherInput.value}`);
//             let x =  await Data.json()
//             console.log(x);
            
//             } 
//     }
// })
// let apiKey = "ca6844a4215b0658aa305d5a1a753c33";
// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let temp = document.querySelector(".temp span");
let hum = document.querySelector(".hum span");
let wind = document.querySelector(".wind span");
let btn = document.querySelector(".button");
let searchInput = document.getElementById("weather");
let cityName = document.querySelector(".cityName p");
let weatherStatus = document.getElementById("weatherStatus");

async function weather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca6844a4215b0658aa305d5a1a753c33&units=metric`);
    let data = await response.json();
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) +"°C";
    hum.innerHTML = Math.round(data.main.humidity) +"%";
    wind.innerHTML =Math.round(data.wind.speed) + "km/h";
    cityName.innerHTML = data.name||data.country;

    if (data.main.temp <= 0) {
        if (weatherStatus.classList.contains("fa-cloud-rain")) {
            weatherStatus.classList.replace("fa-cloud-rain","fa-cloud-meatball");
            weatherStatus.style.color=" #fffafa";
        }else if(weatherStatus.classList.contains("fa-sun")){
            weatherStatus.classList.replace("fa-sun","fa-cloud-meatball");
            weatherStatus.style.color=" #fffafa";
        }else if(weatherStatus.classList.contains("fa-cloud-sun")){
            weatherStatus.classList.replace("fa-cloud-sun","fa-cloud-meatball");
            weatherStatus.style.color=" #fffafa";
        }
        
    }else if(data.main.temp >= 12){
        if (weatherStatus.classList.contains("fa-cloud-rain")) {
            weatherStatus.classList.replace("fa-cloud-rain","fa-sun");
            weatherStatus.style.color=" #FFD43B";
        }else if(weatherStatus.classList.contains("fa-cloud-meatball")){
            weatherStatus.classList.replace("fa-cloud-meatball","fa-sun");
            weatherStatus.style.color=" #FFD43B";
        }else if(weatherStatus.classList.contains("fa-cloud-sun")){
            weatherStatus.classList.replace("fa-cloud-sun","fa-sun");
            weatherStatus.style.color=" #FFD43B";
        }

    }else if(data.main.temp < 12 && data.main.temp > 0){
        if (weatherStatus.classList.contains("fa-cloud-rain")) {
            weatherStatus.classList.replace("fa-cloud-rain","fa-cloud-sun");
            weatherStatus.style.color=" #fffafa";
        }else if(weatherStatus.classList.contains("fa-cloud-meatball")){
            weatherStatus.classList.replace("fa-cloud-meatball","fa-cloud-sun");
            weatherStatus.style.color=" #fffafa";
        }else if(weatherStatus.classList.contains("fa-sun")){
            weatherStatus.classList.replace("fa-sun","fa-cloud-sun");
            weatherStatus.style.color=" #fffafa";
        }
    }
}
searchInput.addEventListener("input",function(){

    weather(searchInput.value)
});