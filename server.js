const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/user')

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req,res) => {
  res.sendFile('views/index.html', {root: __dirname});
});

app.use('/user', userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
