
$(document).ready(function(){
    getQuote();
    var quote;
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

$.ajax({
    method: "GET",
    url: `/quote/${localStorage.userId}`,
    dataType: `json`,
    
    success: (response) => {
        console.log(response)
        response.forEach(quote => {
            $(".save-data").append(`
            <h5>Quote: ${quote.quote}<//h5>
            <h5>Author: ${quote.author}</h5>
            <p class="delete-data"><button class="btn btn-danger save-quote">Delete quote</button></p>
        `)
        }) 
        },
        
    // error: handleError
});

// $(".delete-quote").on("click", function() {
//     // POST request
//     $.ajax({
//         method: "DELETE",
//         url: `/quote/${localStorage.userId}`,
//         data: {
//             quote: quote,
//             author: author,
//             link: link, 
//             user: localStorage.userId
//         },
//         success: (response) => console.log(response),
//         // error: handleError
//     });
// })

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
