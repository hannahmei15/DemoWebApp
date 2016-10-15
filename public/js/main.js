
$(document).ready(function() {
    
  });

function searchWeather() {
  var searchQuery = $('.search').val(); // grab value from search input
  getWeather(searchQuery);
  $('.search').val('');
}

function getWeather(searchQuery) {
	$('.error-message').text('');
  var url = 'http://api.openweathermap.org/data/2.5/weather?'; // url for the API
  var params = {
    APPID: apiKey,
    units: 'imperial'
  };
  if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = 4930956
  }
  $.ajax(url + $.param(params), {
  success: function (data) {
    $('.city').text("The current temperature in " + data.name + " is:");
    $('.temp').text(data.main.temp + ' °F');
    $('.humidity').html(parseSummary(data));
  }, error: function (error) {
    $('.error-message').text('An error occurred!');
  }
});
}

function parseSummary(data) {
  if (data.weather) {
    var weatherItems = data.weather.map(function(weatherItem) {
      var description = weatherItem.description;
      // the api gives you an icon file name, all icon pngs are available at http://openweathermap.org/img/w
      var iconSrc = 'http://openweathermap.org/img/w/' + weatherItem.icon + '.png';
      return `<div class="summary-item"><span>${description}</span><img src="${iconSrc}"/></div>`;
    });
    return weatherItems.join('');
  }
}





