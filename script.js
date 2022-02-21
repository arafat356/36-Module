const API_KEY = `a80c6d8564a79f344acd66bd5a17ffa4`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    //     console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}

const displayTemparature = temparature => {
    console.log(temparature)
}