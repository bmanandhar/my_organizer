console.log("test.js file works, Cool!")
$(document).ready(function() {
  $(".test").on("click", function(){
    alert("You clicked a red button");
  })
  $(".ipinfo").on("click", function(){
    alert("You clicked a blue button");
  })
})