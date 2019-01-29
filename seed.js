var db = require('./models');

var quote_list = [
    {
      quoteText: "No man ever reached to excellence in any one art or profession without having passed through the slow and painful process of study and preparation. ",
      quoteAuthor: "Horace",
      quoteLink: "http://forismatic.com/en/46a3c4608d/"
    },
   
    {
      quoteText: "By going beyond your own problems and taking care …confidence, courage, and a greater sense of calm.",
      quoteAuthor: "Dalai Lama",
      quoteLink: "http://forismatic.com/en/c86a87df29/"
    },
  
    {
      quoteText: "Take it easy — but take it. ",
      quoteAuthor: "Woody Guthrie",
      quoteLink: "http://forismatic.com/en/e8813c7bb6/"
    },
  
    {
      quoteText:  "No one has a finer command of language than the person who keeps his mouth shut. ",
      quoteAuthor: "Sam Rayburn",
      quoteLink: "http://forismatic.com/en/4832d694c6/"  
    },
  
    { quoteText: "Though no one can go back and make a brand new sta… can start from now and make a brand new ending. ",
      quoteAuthor: "",
      quoteLink: "http://forismatic.com/en/a7c450f52d/"
    },
  
    { quoteText: "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself. ",
      quoteAuthor: "Henry Miller",
      quoteLink: "http://forismatic.com/en/1b431da4bc/"
    },
  
    { quoteText: "Who we are never changes. Who we think we are does. ",
      quoteAuthor: "Mary Almanac",
      quoteLink: "http://forismatic.com/en/e93c533c2d/"
    },
    
    { quoteText:  "Don't worry when you are not recognized, but strive to be worthy of recognition.",
      quoteAuthor: "Abraham Lincoln",
      quoteLink: "http://forismatic.com/en/6d046ed767/"
    },  
  
    {
      quoteText: "Talk doesn't cook rice.",
      quoteAuthor: "Chinese Proverb",
      quoteLink: "http://forismatic.com/en/e6aa59f390/"
    },
  
    {
      quoteText: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.  ",
      quoteAuthor: "Buddha ",
      quoteLink: "http://forismatic.com/en/9427cfe2f8/"
    },
  
    {
      quoteText: "Once you choose hope, anythings possible. ",
      quoteAuthor: "Christopher Reeve",
      quoteLink: "http://forismatic.com/en/c43644e30a/"
    },
  
    {
      quoteText: "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
      quoteAuthor: "Oscar Wilde",
      quoteLink: "http://forismatic.com/en/ccec2684ce/"
    },
  
    {
      quoteText: "Life is the flower for which love is the honey. ",
      quoteAuthor: "Victor Hugo",
      quoteLink: "http://forismatic.com/en/b6f5442116/"
    }
  
  ];

  var news_list = [
    {
        content: "HOUSTON Five Houston police officers have been shot in southeast Houston, Houston Police Chief Art Acevedo confir",
        publishedAt: "2019-01-28T23:24:16Z"
    },

      {
        content: "Washington (CNN) Special counsel Robert Mueller's investigation into Russian interference in the 2016 presidential election is "close to being completed," acting Attorney General Matt Whitaker said Monday. Whitaker told reporters he has been "fully briefed" o… [+2493 chars]",          
        publishedAt: "2019-01-28T23:04:00Z"
    },

    { 
        content: "Breaking News Emails Get breaking news alerts and special reports. The news and stories",
        publishedAt: "2019-01-28T21:14:00Z"
    },

    {
        content: "LAS VEGAS (AP) -- Nevada gambling regulators announced a settlement Monday with casino mogul Steve Wynn's former company over allegations that former executives failed on multiple occasions to investigate claims of sexual misconduct against him. The Nevada Ga… [+3987 chars]",
        publishedAt: "2019-01-28T21:19:00Z"
    },

    {
        content: "Acting Secretary of Defense Patrick Shanahan Patrick Michael Shanahan Overnight Defense: Trump agrees to reopen government without wall funding | Senate approves stopgap spending | Dems ask Armed Services chair to block military funding for wall | Coast Guard… [+1703 chars]",
        publishedAt: "2019-01-28T18:27:08Z"
    }
  ];




// remove all records that match {} -- which means remove ALL records
// db.Book.remove({}, function(err, books){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all books');

//     // create new records based on the array books_list
//     db.Book.create(books_list, function(err, books){
//       if (err) { return console.log('err', err); }
//       console.log("created", books.length, "books");
//       process.exit();
//     });
//   }
// });

// db.Author.deleteMany({}, function(err, authors) {
//   console.log('removed all authors');
//   db.Author.create(authors_list, function(err, authors){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all authors');
//     console.log("created", authors.length, "authors");


//     db.Book.deleteMany({}, function(err, books){
//       console.log('removed all books');
//       books_list.forEach(function (bookData) {
//         var book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         });
//         db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
//           console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           book.author = foundAuthor;
//           book.save(function(err, savedBook){
//             if (err) {
//               console.log(err);
//             }
//             console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
//           });
//         });
//       });
//     });

//   });
// });
