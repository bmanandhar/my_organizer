console.log("jQuery file index.js")

$(".red-box").click(function(){
    $(this).css("background-color", "green");
})

$(".reset").click(function() {
    location.reload();
})