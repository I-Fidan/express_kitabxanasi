const express = require('express');
const app = express();
const main= [{id:"1",name:"Fidan",age:"19"},{id:"2",name:"Lamiya",age:"20"},{id:"3",name:"Sona",age:"21"}]

app.get('/get', function (req, res) {
  res.send(main);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});