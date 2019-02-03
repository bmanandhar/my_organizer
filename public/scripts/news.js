$(document).ready(function(){

    //Data being pulled from `newsapi.org`
    // can use different basis such as 'subject', 'country', 'keywords' etc 
    const url = 'https://newsapi.org/v2/top-headlines?'+
                'country=us&'+ //Country-code based catagory 
                'apiKey=307652aa8aa44bf0869e6147a272b466'; //api-key

    //Json Get Request
    const req = new Request(url);
    fetch(url)
    .then(function(response) {
        return response.json()
    }).then((Jsonresponse)=>{

    //Response being used to render the data
        let 
            all_news = Jsonresponse.articles  
            length = all_news.length
        console.log(all_news);

        //javaSript for loop rendering all news contents
        for (let i=0; i<length; i++) {
            
            //`if else` statement for checking condition to render data to left & right columns  
            if (i%2===0){
                $('.news-even').append(` 
                    <div>
                        <p><b>News# ${i+1}</b></p>
                        <p>Date published: ${all_news[i].publishedAt}</p>
                        <p>Source: ${all_news[i].source.name}</P>
                        <p>Content: ${all_news[i].content}</p>
                        <hr>
                    </div>`
                )
                } else {
                    $('.news-odd').append(` 
                    <div>
                        <p><b>News# ${i+1}</b></p>
                        <p>Date published: ${all_news[i].publishedAt}</p>
                        <p>Source: ${all_news[i].source.name}</P>
                        <p>Content: ${all_news[i].content}</p>
                        <hr>
                    </div>`
                )
            }
        }
    })
});
    
