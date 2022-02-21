const API_KEY = `a80c6d8564a79f344acd66bd5a17ffa4`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    //     console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayTemparature = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('temp-water', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);
    //     setWather icon 
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const ImgIcon = document.getElementById('Wather-icon');
    ImgIcon.setAttribute('src', url);
}