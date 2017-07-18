$(document).ready(function(){
  if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){

      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log("lat: " + lat);
      console.log("lng: " + lng);

      var locationAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=AIzaSyAR9C3v1sGmVeQmwY0Xi-k1TTwEyHkPdGA';
      //Add weather here
      var weatherAPI = 'https://api.darksky.net/forecast/acd7f40616ce94c7bbc0f32cc1a0e088/' + lat + ',' + lng + '?callback=?';
      var address;
      $.getJSON(locationAPI, function(data){

        //get typeof of this.
        $("#location").append("<p>In " +  data.results[4].formatted_address + "</p>");
      });

      $.getJSON(weatherAPI , function(data){
        $("#weather").append("<p>The current temperature is " +  "<span id='temp'>" + Math.round(data.currently.temperature) + "</span>&deg; F</p>");
        console.log(data.currently.temperature)
      });

      $("#change").on("click", function(){
        var temp = $("#temp").text();
        if(degree.celsius === true){
          temp = Number(temp);
          temp = (temp - 32) * 5/9;
          temp = Math.round(temp);
          $("#weather").empty().append("<p>The current temperature is " + "<span id='temp'>" + temp + "</span>&deg; C</p>");
          degree.celsius = false;
        } else {
          temp = Number(temp);
          temp = (temp * 9/5) + 32;
          $("#weather").empty().append("<p>The current temperature is " + "<span id='temp'>" + temp + "</span>&deg; F</p>");
          degree.celsius = true;
        }
      });

      var degree = {
        celsius: true,
      };

    });
  }
});
