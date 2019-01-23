$(document).ready(function(){

    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=307652aa8aa44bf0869e6147a272b466';
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
    console.log(response.json());
        



    })
    