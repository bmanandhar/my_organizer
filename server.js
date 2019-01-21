const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))

//assuming app is express Object.
//http://localhost:3000/
app.get('/', (req,res) => {
  res.sendFile('./index.html');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))