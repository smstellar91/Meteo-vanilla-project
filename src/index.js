function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.city;
    
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city){
    let apiKey="d01e20d8to435efcbfa38a7b1daac0be";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
    

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchCity("Amsterdam");