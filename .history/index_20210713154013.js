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
//02
app.get('/authors/:id/', (req,res) => {
    const id = req.params.id
    const authors = [
      'Lawrence Nowell, UK',
      'William Shakespeare, UK',
      'Charles Dickens, US',
      'Oscar Wilde, UK',
    ]
    res.send(authors[id - 1])
  })
app.get('*', (req, res) => {
  res.send('404 - Error')
})
