$(document).ready(function(){
    const url = 'https://newsapi.org/v2/top-headlines?'+
                'country=us&'+
                'apiKey=307652aa8aa44bf0869e6147a272b466';
    const req = new Request(url);
    fetch(url)
    .then(function(response) {
        return response.json()
    }).then((Jsonresponse)=>{
        let 
            all_news = Jsonresponse.articles  
            length = all_news.length
        console.log(all_news);

        for (let i=0; i<length; i++) {
            $('.news-content').append(` 
                <p><b>News# ${i+1}</b></p>
                <p>${all_news[i].publishedAt}</p>
                <p>Source: ${all_news[i].source.name}</P>
                <p>${all_news[i].content}</p>
                <button class="btn btn-primary save-news">save</button>
                <p>- - - - - - -</p>`
            )
        }
    })
});
    
