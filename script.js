let output = document.querySelector('.output-information');
let buttonWeather = document.querySelector('.button-weather');


buttonWeather.addEventListener('click',function(){
let cityInput = document.querySelector('.city').value;
const url = `http://api.weatherstack.com/current?access_key=3013af8dc51779e53a6fe47cfff54070&query=${cityInput}`;

async function getUrl() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data)
  let { current: { cloudcover, feelslike, humidity, observation_time, temperature, weather_descriptions, weather_icons, precip, pressure, uv_index, wind_speed }, location: {country, name} } = data;
  
const getImg = (weather_descriptions) => {
  if(weather_descriptions[0]==='Sunny') return 'images/sunny.png'
  else if(weather_descriptions[0]==='Clear') return 'images/clear.png'
  else if(weather_descriptions[0]==='Partly cloudy') return 'images/partly.png'
  else if(weather_descriptions[0]==='Cloud') return 'images/cloud.png'
  else if(weather_descriptions[0]==='Overcast') return 'images/cloud.png'
  else return 'images/partly.png'
}
 
  output.innerHTML = `
  <div class = 'control-block'>
  <div class = 'info-block'>
  <div class = 'country'> ${country}</div>
  <div class = 'name'>${name}</div>
  <div class = 'info-block-add'>
  <div class = 'temperature_img'><img class = 'temperature_img_box' src='images/teprature.png'></div>
  <div class = 'temperature'>${temperature} °C</div>
  </div>
  <div class = 'info-block-additional'>
  <div class = 'observation_time'> ${observation_time}</div>
  <div class = 'feelslike'>feelslike: ${feelslike} °C</div>
  </div>
  </div>
  <div class = 'additional_info'>
  <div class = 'additional_container'>
  <div class = 'weather_icons'><img  src='${getImg(weather_descriptions)}' class = 'img'></div>
  <div class = 'weather_descriptions'>${weather_descriptions}</div>
  <div class = 'cloudcover'>Cloudcover: ${cloudcover}%</div>
  </div>
  <div class = 'another_container'>
  <div class = 'humidity'>humidity: ${humidity}%</div>
  <div class = 'precip'>precip: ${precip*100}%</div>
  <div class = 'pressure'>pressure: ${pressure}гПа</div>
  <div class = 'uv_index'>uv-index: ${uv_index}</div>
  <div class = 'wind_speed'>wind-speed: ${wind_speed}км/ч</div>

  </div>
  </div>
  </div>

  
  `


}
getUrl()
})

