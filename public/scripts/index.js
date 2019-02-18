$(document).ready(function(){
    var quote;
    getQuote();
    //GET request from database API to render data
    $.ajax({
        method: "GET",
        url: `/quote/${localStorage.userId}`,
        dataType: `json`,
        
        success: (response) => {
            response.forEach(quote => {
                $(".save-data").append(`
                <div>
                <h5>${quote.quote}<//h5>
                <h5>Author: ${quote.author}</h5>
                <button id="delete-quote" class="btn btn-info delete-data" quote-id=${quote._id}>Delete</button>
                </div>
                <hr>`)
            }) 
        },    
        // error: handleError
    });

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
      });
    };

    $(".save-quote").on("click", function() {
        // POST request
        console.log(quote)
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
    $(".save-data").on("click", 'button' ,function() {
        // POST request
        let quoteId = $(this).attr('quote-id');
        //Delete method
        $.ajax({
            method: "DELETE",
            url: `/quote/${quoteId}`,
            success: (response) => {
                console.log(response);
                location.reload();
            }
            // error: handleError
        });
    })
    //Posting data straight to tweeter
     $(".tweet").on("click", function(){
        window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
        });
    //Posting data straight to facebook
    $(".facebook").on("click", function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u=");
    });
      $(".quote").on("click", function(){   
          getQuote();
      })
    });
