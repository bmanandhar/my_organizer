$(document).ready(function(){
    getQuote();
    //Variables declared
    var quote, author, link;
    
    //Function declaration  
    function getQuote(){
      var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
       
      //API call using Json GET method, instruction given
      $.getJSON(url, function(data){  
  
        //logs data on console
        console.log("Bijaya's Organizer");
        console.log(typeof data);
        console.log("Type of data");
        console.log(data);
        
        quote = data.quoteText;
        author = data.quoteAuthor;
        link = data.quoteLink;
        
        if (data.quoteAuthor) {
          author = data.quoteAuthor;
        } else {
          author = "Anonymous";
        }
        $(".quote").html('"'+quote+'"');
        $(".author").html("-"+author);
        console.log(link);
      });
    };
      
        $(".tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text="+quote+"   - "+author);
        });
        console.log(quote+' - '+author);
        $(".facebook").on("click", function(){
          window.open("https://www.facebook.com/sharer/sharer.php?u="+ link);
      });
      $(".quote").on("click", function(){   
          getQuote();
      })
    });
/*
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
*/