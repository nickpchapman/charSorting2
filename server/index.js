const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
const { sortString } = require('./serverHelpers.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/sort', (req, res) => {
  res.send(sortString(req.body.str));
});

app.listen(port, () => console.log(`live on port: ${port}`));