const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const feels_like = document.querySelector('.feels-like');

async function checkWeather(city){
    const api_key = '9412a3288ed770e4811c0a01fba919c2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    
    const weather_data = await fetch(url).then(response =>
        response.json());

        if(weather_data.cod === `404`){
            weather_body.style.display = "none";
            location_not_found.style.display = "flex";
            console.log("error");
            return;
        }

        
            weather_body.style.display = "flex";
            location_not_found.style.display = "none";

    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    feels_like.innerHTML = `Feels like - ${Math.round(weather_data.main.feels_like)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;  


const condition = weather_data.weather[0].description.toLowerCase();
console.log("Condition:", condition);

if (condition.includes("cloud")) {
    weather_img.src = "./assets/cloud.png";
}
else if (condition.includes("clear")) {
    weather_img.src = "./assets/clear.png";
}
else if (condition.includes("rain") || condition.includes("drizzle")) {
    weather_img.src = "./assets/rain.png";
}
else if (condition.includes("mist") || condition.includes("haze") || condition.includes("fog")) {
    weather_img.src = "./assets/mist.png";
}
else if (condition.includes("snow")) {
    weather_img.src = "./assets/snow.png";
}
else {
    weather_img.src = "./assets/clear.png"; // fallback
}


     console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

