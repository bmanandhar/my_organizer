
//ipinfo.js
$(document).ready(function(){
  getIpInfo()
});

function getIpInfo(){
  $.ajax({
    method: `GET`,
    url: `https://ipinfo.io`,
    dataType: `json`,
    success: (response) => {
    console.log(response);
    let 
      ip = response.ip;
      city = response.city;
      region = response.region;
      loc = response.loc;
      lat_long = loc.split(",");
      console.log(lat_long);
  
      $(".ip").html(`IP Address: ${ip}`);
      $(".city").html(`City: ${city}`);
      $(".region").html(`Region: ${region}`);
      $(".lat").html(`Latitude: ${lat_long[0]}`);
      $(".long").html(`Longitude: ${lat_long[1]}`);


      $(".loc").html(`Lat / Long: ${loc}`);
    }
  })
}
