const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data.js')
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/./public'));

app.get('/physicians', (req,res) => {
  let physicians = data.map( dr => {
    return dr.physician;
  })
  res.status(200).send(physicians)
  res.end();
})

app.get('/appointments', (req, res) => {
  let id = req.query.physician;
  let appointments = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].physician.id === Number(id)) {
      appointments = data[i];
    }
  }
  res.status(200).send(appointments)
  res.end();
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
