
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
  
      $(".ip").html(`IP Address: ${ip}`);
      $(".city").html(`City: ${city}`);
      $(".region").html(`Region: ${region}`);
      $(".loc").html(`Lat / Long: ${loc}`);
    }
  })
}
