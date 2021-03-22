const btnImg = document.querySelector('.img-btn');
const days = document.getElementById('days');
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnQuote = document.querySelector('.quote-btn');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let morningImages = ['morning/01.jpg', 'morning/02.jpg', 'morning/03.jpg', 'morning/04.jpg', 'morning/05.jpg', 'morning/06.jpg',
  'morning/07.jpg', 'morning/08.jpg', 'morning/09.jpg', 'morning/10.jpg', 'morning/11.jpg', 'morning/12.jpg',
  'morning/13.jpg', 'morning/14.jpg', 'morning/15.jpg', 'morning/16.jpg', 'morning/17.jpg', 'morning/18.jpg',
  'morning/19.jpg', 'morning/20.jpg'
];

let afternoonImages = ['day/01.jpg', 'day/02.jpg', 'day/03.jpg', 'day/04.jpg', 'day/05.jpg', 'day/06.jpg',
  'day/07.jpg', 'day/08.jpg', 'day/09.jpg', 'day/10.jpg', 'day/11.jpg', 'day/12.jpg',
  'day/13.jpg', 'day/14.jpg', 'day/15.jpg', 'day/16.jpg', 'day/17.jpg', 'day/18.jpg',
  'day/19.jpg', 'day/20.jpg'
];

let eveningImages = ['evening/01.jpg', 'evening/02.jpg', 'evening/03.jpg', 'evening/04.jpg', 'evening/05.jpg', 'evening/06.jpg',
  'evening/07.jpg', 'evening/08.jpg', 'evening/09.jpg', 'evening/10.jpg', 'evening/11.jpg', 'evening/12.jpg',
  'evening/13.jpg', 'evening/14.jpg', 'evening/15.jpg', 'evening/16.jpg', 'evening/17.jpg', 'evening/18.jpg',
  'evening/19.jpg', 'evening/20.jpg'
];

let nightImages = ['night/01.jpg', 'night/02.jpg', 'night/03.jpg', 'night/04.jpg', 'night/05.jpg', 'night/06.jpg',
  'night/07.jpg', 'night/08.jpg', 'night/09.jpg', 'night/10.jpg', 'night/11.jpg', 'night/12.jpg',
  'night/13.jpg', 'night/14.jpg', 'night/15.jpg', 'night/16.jpg', 'night/17.jpg', 'night/18.jpg',
  'night/19.jpg', 'night/20.jpg'
];

shuffle(morningImages)
shuffle(afternoonImages)
shuffle(eveningImages)
shuffle(nightImages)

let imgCollection = [nightImages[0], nightImages[1], nightImages[2], nightImages[3], nightImages[4], nightImages[5], 
                    morningImages[0], morningImages[1], morningImages[2], morningImages[3], morningImages[4], morningImages[5], 
                    afternoonImages[0], afternoonImages[1], afternoonImages[2], afternoonImages[3], afternoonImages[4], afternoonImages[5], 
                    eveningImages[0], eveningImages[1], eveningImages[2], eveningImages[3], eveningImages[4], eveningImages[5]];

let today = new Date();
let hours = today.getHours();
let i = today.getHours();


function showTime() {
  let today = new Date();
  let month = today.getMonth();
  let week = today.getDay();
  let day = today.getDate();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();


  days.innerHTML = `${day} ${months[month]}, ${weeks[week]}`;
  time.innerHTML = `${addZeroes(hour)}:${addZeroes(min)}:${addZeroes(sec)}`;

  setTimeout(showTime, 1000);
}

function addZeroes(n) {
  return parseInt(n) < 10 ? "0" + n : n;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function checkHour() {
  let currentDate = new Date();
  let currentHours = currentDate.getHours();
  if (currentHours !== hours) {
    hours = currentHours;
    i = currentHours;
    updateGreetingText();
    updateBack();
    console.log('content changed, hour is gone')
    console.log(new Date());
  }
  setTimeout(checkHour, 1000);
}

function updateGreetingText() {
  if (hours > 5 && hours < 12) {
    greeting.textContent = 'Good morning';
  } else if (hours > 11 && hours < 18) {
    greeting.textContent = 'Good afternoon';
  } else if (hours > 17) {
    greeting.textContent = 'Good evening';
  } else if (hours < 6) {
    greeting.textContent = 'Good night';
  }
}


function updateBack() {
  let imageRoot = "assets/images/";
  
  if (i > 5 && i < 12) {
    document.body.style.backgroundImage = `url('${imageRoot + imgCollection[i]}')`;
    console.log('morning')
  } else if (i > 11 && i < 18) {
    document.body.style.backgroundImage = `url('${imageRoot + imgCollection[i]}')`;
    console.log('afternoon')

  } else if (i > 17) {
    document.body.style.backgroundImage = `url('${imageRoot + imgCollection[i]}')`;
    console.log('evening')

  } else if (i < 6) {
    document.body.style.backgroundImage = `url('${imageRoot + imgCollection[i]}')`;
    console.log('night')
  }
  console.log(i)
  i++;
  if (i > 23) {
    i = 0;
  }
  btnImg.disabled = true;
  setTimeout(function() { btnImg.disabled = false }, 1100);
}



function getName(messageText) {
  if (localStorage.getItem('name') === null) {
    name.textContent = messageText;
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus(messageText) {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = messageText;
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

function clearInput(input, messageText) {
  if (input.textContent == false && name.textContent != '0') {
    input.textContent = messageText;
  }
  input.addEventListener('click', function () {
    input.textContent = undefined;
  });
  input.addEventListener('blur', function () {
    if (input.textContent == false && name.textContent != '0') {
      input.textContent = messageText;
    }
  });
}

async function getQuote() {  
  const url = `https://favqs.com/api/qotd`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quote.body;
  figcaption.textContent = data.quote.author;
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=6c616a4a29c943fd37cce0136c15dfd0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed}m/s`
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

function getCityName(messageText) {
  if (localStorage.getItem('city') === null) {
    city.textContent = messageText;
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

function setCityName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('city', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
city.addEventListener('keypress', setCityName);
city.addEventListener('blur', setCityName);
btnImg.addEventListener('click', updateBack);
document.addEventListener('DOMContentLoaded', getQuote);
btnQuote.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

showTime();
checkHour();
updateGreetingText();
updateBack();
getName('[Enter name]');
getFocus('[Enter focus]');
getCityName('NETU');
clearInput(name, '[Enter name]');
clearInput(focus, '[Enter focus]');
getWeather();

