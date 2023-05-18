    function displayNewYork(){
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");
    let newYorkTime = moment().tz("American/New_York");

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