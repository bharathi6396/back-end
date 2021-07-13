const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Beautiful homepage');
  });
  app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});
app.get('/bonjour', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send('bonjour')
});

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});