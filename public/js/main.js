
$(document).ready(function() {
  getWeather();
  function getWeather() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&id=4930956&APPID=' + apiKey;
  $.ajax(url, {
    success: function (data) {
      $('.city').text(data.name);
      $('.temp').text(data.main.temp + ' °F');
    }
  });
}
});



