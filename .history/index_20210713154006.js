const express = require('express')

const app = express()
//01
const port = 8000
app.listen(port, () => {
  console.info('Server started on port : ' + port)
})

app.get('/', (req, res) => {
  res.send('Authors API')
})
app.get('*', (req, res) => {
  res.send('404 - Error')
})
