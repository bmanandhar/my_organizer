
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
      $(".city").html(`City: ${city}`);
      $(".region").html(`Region: ${region}`);
      // $(".postal").html(`Zip: ${postal}`);
      // $(".country").html(`Country: ${country}`);
      $(".ip").html(`IP Address: ${ip}`);
      $(".name").html(`Company: ${name}`);
      $(".lat").html(`Latitude: ${lat_long[0]}`);
      $(".long").html(`Longitude: ${lat_long[1]}`);
      $(".time").html("Time: " + time);
    }
  })
}
