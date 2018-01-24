const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`live on port: ${port}`));

//Routes
app.get('/', (req, res) => {
  res.send('server is live!')
});

app.post('/sort', (req, res) => {
  console.log('sort route called')
  res.send('dummyString')
});