
let getWeather = async(location) => {
    const API_KEY = 'eb71cfa3bd3641699dd194037221907';
    let LOCATION = location;
    let API_URL = "http://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + LOCATION +"&aqi=yes";

    return await fetch(API_URL);
};


let displayWeather = (data) => {   
        try{
        const {name, country, localtime } = data.location;
        const {temp_c, is_day, condition,
             wind_kph, humidity, uv } = data.current;
        
        document.querySelector(".location-name").innerText = name;
        document.querySelector(".location-time").innerText = localtime;
        document.querySelector(".location-country").innerText = country;
        document.querySelector(".condition-text h2").innerText = condition.text;
        document.querySelector(".condition-icon").src = "https:" + condition.icon;
        document.querySelector(".others-wind_kph h1").innerText = wind_kph;
        document.querySelector(".others-humidity h1").innerText = humidity;
        document.querySelector(".others-uv h1").innerText = uv;     
        document.querySelector(".weather-details").style.visibility = "visible";         
        
        }
        catch(e){
            document.querySelector(".weather-details-error").style.visibility = "visible"
            document.querySelector(".weather-details").style.visibility = "hidden"
        }

        document.querySelector(".weather-details").classList.remove("loading");
};


let search = () => {
    let location = document.querySelector(".search-bar input").value

    if (location.length !== 0){
        document.querySelector(".weather-details").classList.add("loading"); 
        document.querySelector(".weather-details").style.visibility = "hidden"
        document.querySelector(".weather-details-error").style.visibility = "hidden";

        getWeather(location)
        .then((response) => response.json())
        .then((data) => {displayWeather(data)});
    }
}


document.querySelector(".search-bar button").addEventListener("click",() => { search() });
document.querySelector(".search-bar input").addEventListener('keypress', 
                    function (e) { if (e.key === 'Enter') {  search()  } });


(async function(){
 await getWeather('London')
.then((response) => response.json())
.then((data) => {displayWeather(data)});
})();

