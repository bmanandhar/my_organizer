const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const jwt = require('jsonwebtoken')
const db = require('./models')

const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('views'))

// routes for login and signup
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.post('/verify', verifyToken, (req, res) => {
  let verified= jwt.verify(req.token, 'waffles')
  console.log("verified: ", verified)
  res.json(verified)
})

// SAMPLE PROTECTED ROUTE!
// protected route - a route only a user with a jwt token in their header can access.
app.post('/protectedPage', verifyToken, (req, res) => {
  console.log(req.token)
  jwt.verify(req.token, 'waffles', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created',
        authData
      });
    }
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Tokenj 
function verifyToken(req, res, next) {
  console.log("in verify...");
  // Get auth header value
  // when we send our token, we want to send it in our header
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader)
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

//API Quotes
// server.js
// app.get('/api/quote', function (req, res) {
//   // send all books as JSON response
//   db.Quote.find(function(err, quotes){
//     if (err) {
//       console.log("index error: " + err);
//       res.sendStatus(500);
//     }
//     res.json(quotes);
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/home.html");
// });

app.post("/quote", (req, res) => {
  db.Quote.create(req.body, (err,newQuote)=>{
    if(err){
      res.json(err)
    }
    res.json({newQuote:newQuote})
  })
});


app.listen(port, () => console.log(`Server listening on port ${port}!`)) //port=3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req,res) => {
  res.sendFile('views/index.html', {root: __dirname});
});

app.use('/user', userRoutes);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
