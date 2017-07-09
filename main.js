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
        $("#location").append("<p>In " +  data.results[0].formatted_address + "</p>");
      });

      $.getJSON(weatherAPI , function(data){
        console.log(data.currently.temperature)
      });



    });
  }
});
