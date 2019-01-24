const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));
const port = 3000;
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/user')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//assuming app is express Object.
//http://localhost:3000/
app.get('/', (req,res) => {
  res.sendFile('./index.html');
});


app.use('/user', userRoutes);

app.post('/verify', verifyToken, (req, res) => {
  let verified= jwt.verify(req.token, 'waffles')
  console.log("verified: ", verified)
  res.json(verified)
})

app.get('/hello', (req, res) => res.send('Hello World!'))

const mongoose = require('mongoose');
const db = require(`./models`); // grab the export object from models/index.js
// now db.Person stores the Person model from the models/person.js file

// CREATE a new user
// app.post('/user', (req, res) => {
//   console.log(req.body);
//   let newUser = req.body;
//   db.Restaurant.create(newUser, (err, savedUser) => {
//     if (err) {
//       return console.log(err)
//     };
//     res.json(savedUser);
//   });
// });

// app.get('/user', (req, res) => {
//   db.User.find({}).exec((users)=>{
//     res.json(users)
//   })
// });

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

// server.js port=3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))