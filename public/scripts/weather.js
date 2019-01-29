$(document).ready(function(){
    var api_key = `8f236e524e673e139b0f6739b81a6eb4`;
//    var openWeatherMap; on Toggle, trying to replace data by metric units available on the api url,
    var ipInfo = `https://ipinfo.io`;
    var imperial = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=`;
    var metric = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=`;
    var celsius = false;
    function result(fahrenheit, celsius){
        if(celsius) return Math.round(((fahrenheit - 32) * (5/9)) * 10) / 10 + "&deg" + "C";
        return Math.round(fahrenheit * 10) / 10 + "&deg" + "F";
    }

    function cityWeather(data, celsius){
        console.log(`ipInfo`);
        console.log(data);
        var temp = result(data.main.temp, celsius);
        var max = result(data.main.temp_max, celsius);
        var min = result(data.main.temp_min, celsius);
      
        $(".city").html(city); 
        $(".region-country").html(region + ", " + country);  
        $(".temp").html(temp);
        $(".weather").html(data.weather[0].description);
        $(".max").html("Max temp: " + max);
        $(".min").html("Min temp: " + min);
        $(".humidity").html("Humidity: " + data.main.humidity + "%");
        $(".pressure").html("Pressure: " + data.main.pressure + "hPa");
        $(".wind-speed").html("Wind speed: " + data.wind.speed + "mile/hr");
        $(".wind-dir").html("Wind direction: " + data.wind.deg + "&#176");
        $(".temp").prepend("<img src='" + 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png' + "'>");
    }

    $(function(){
      
        $.getJSON(ipInfo, function(data){
            console.log(data);
            loc = data.loc.split(",");
            city = data.city;
            region = data.region;
            country = data.country;
           
        $.getJSON(imperial + loc[0] + "&lon=" + loc[1] + "&appid=" + api_key, function(data){
            cityWeather(data, celsius);
            $("#toggle").click(function(){
                celsius = !celsius;
                cityWeather(data, celsius);
               })
            })
        })    
    })
    var now = new Date();
    // var nowArray = now.split("");
    console.log(now);
    // console.log(typeof now);
    var timestamp = now.getTime()
    console.log(timestamp);
    console.log(typeof timestamp);

    // console.log(Object.values(now));

    //"Sun Jan 27 2019 20:55:49 GMT-0800 (Pacific Standard Time)"
    
});


/*
$.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=',
      data: {
        id: 123
      },
      success: function( response ) {
        $('#temp').html('The temperature in Detroit is ' + response.temp);
      },
      error: function() {
        alert('There was an error getting weather data.');
      },
      beforeSend: function () {
        $('#page').append('Loading');
      },
      complete: function () {
        $('#loading').remove();
      }
});
*/

/* var ipinfo
city: "San Francisco"
country: "US"
ip: "38.140.30.202"
loc: "37.7909,-122.4020"
org: "AS174 Cogent Communications"
postal: "94104"
region: "California"
*/