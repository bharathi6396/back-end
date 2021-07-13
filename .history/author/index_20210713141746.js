const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Beautiful homepage');
  });


const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});