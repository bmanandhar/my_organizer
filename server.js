const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));
const port = 3000;


//assuming app is express Object.
//http://localhost:3000/
app.get('/', (req,res) => {
  res.sendFile('./index.html');
});

app.get('/hello', (req, res) => res.send('Hello World!'))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_organizer', { useNewUrlParser: true } );

app.get('./user', (req, res) => {
  res.json({
    firstName: "Homer",
    lastName: "Simpson",
    email: "myemail@email.com",
    password: "abcd1234",
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))