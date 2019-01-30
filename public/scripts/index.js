$(document).ready(function(){
    getQuote();
    //Variables declared
    var quote, author, link;
    
    //Function declaration  
    function getQuote(){
      var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
       
      //API call using Json GET method, instruction given
      $.getJSON(url, function(data){  
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
        console.log('"'+link+'"');
        console.log('"'+quote+'"');
        console.log("-"+author);
      });
    };
        $(".save-quote").on("click", function() {

            // POST request
            $.ajax({
                method: "POST",
                url: "/quote",
                data: {
                    quote: quote,
                    author: author,
                    link: link, 
                    user: localStorage.userId
                },
                success: (response) => console.log(response),
                // error: handleError
            });
        })
        

        /*
<script type"text/javascript">
function save(){
    $.ajax({
        type: "POST",
        url: "yourpath/yourfile.php",
        data: {title: title},
        success: function(data) {
            alert("Ajax save executed!");
        }
    });
}
</script>
*/
        $(".tweet").on("click", function(){
        window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
        });
        $(".facebook").on("click", function(){
          window.open("https://www.facebook.com/sharer/sharer.php?u="+ link);
      });
      $(".quote").on("click", function(){   
          getQuote();
      })
    });
