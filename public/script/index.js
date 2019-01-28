console.log("Sanitation");

$(document).ready(function(){
    $(".sign-in-btn").on("click",function(){
        $(".sign-in-form").css("display","block")
        $(".sign-up-btn").css("display","none")
    })

    $(".sign-up-btn").on("click",function(){
        $(".sign-up-form").css("display","block")
        $(".sign-in-btn").css("display","none")
    })
})