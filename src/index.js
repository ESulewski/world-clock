function displayNewYork(){
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss[<small>]A[</small>]");
}
displayNewYork();

setInterval(displayNewYork, 1000);

function displayLondon(){
    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector("#date");
    let londonTimeElement = londonElement.querySelector("#time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss[<small>]A[</small>]");
}
displayLondon();
setInterval(displayLondon, 1000);

function displayCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName= cityTimeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#location");
    cityElement.innerHTML =`
      <div class="city">
        <div>
            <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        </div>
            <div class="time">${cityTime.format("h:mm:ss[<small>]A[</small>]")}
        </div>
        `;
}

let displayCityElement = document.querySelector("#cities");
displayCityElement.addEventListener("change", displayCity);
