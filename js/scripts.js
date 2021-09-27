// -- TO-DO LIST FUNCTION --

function newItem() {

  // ADDING A NEW ITEM TO THE LIST OF ITEMS
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let form = $('.todo-form')[0];
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    form.reset();
  }

  // CROSSING OUT AN ITEM FROM THE LIST OF ITEMS:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  // ADDING THE DELETE BUTTON "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>‚');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }
  // REORDERING THE ITEMS:
  $('#list').sortable()
}


// -- DATE AND TIME --

const dateAndTime = document.querySelector('.date-time');

const tick = () => {

  const now = new Date();

  const date = now.toDateString();
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  const timeHtml = `
  <h2>${date}</h2>
  <h2 >
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
  </h2>
  `;

  dateAndTime.innerHTML = timeHtml;

};

setInterval(tick, 1000);


// -- WEATHER APP --


// -- interacting with API

const key = '5RNvlgWT14hUGz0NX0RrGd6QSrJA8fVJ';

// get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};

// -- DOM manipulation

const cityForm = document.querySelector('.change-location');
const details = document.querySelector('.details');

const updateUI = (data) => {

  const city = data.cityDetails;
  const weather = data.weather;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${city.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

};

const updateCity = async (city) => {

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather
  }
}

cityForm.addEventListener('submit', e => {
  //prevent default action
  e.preventDefault();

  //get city input value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update UI with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})