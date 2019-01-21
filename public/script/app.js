$(document).ready(function(){
    //Variables declared
    var quote, author, link;
    //Function declaration  
    function getQuote(){
    var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
     
    //API call using Json GET method
    $.getJSON(url, function(data){
      
      console.log("Bijaya's codepen");
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
      $(".link").html(link);
    });
  };
    
      $("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text="+quote+"   - "+author);
      });
    
      $(".facebook").on("click", function(){
      window.open("https://www.facebook.com/sharer/sharer.php?u="+ link);
    });
    
      $("#newQuote").on("click", function(){     
      getQuote();
    });
    
  });
  