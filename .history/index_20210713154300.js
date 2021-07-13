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
app.get('/authors/:id', (req,res) => {
    const id = req.params.id
    const authors = [
      'Lawrence Nowell, UK',
      'William Shakespeare, UK',
      'Charles Dickens, US',
      'Oscar Wilde, UK',
    ]
    res.send(authors[id - 1])
  })
  //03
  app.get('/authors/:id/books', (req, res) => {
    const id = req.params.id
    const books = [
      'Beowulf',
      'Hamlet, Othello, Romeo and Juliet, MacBeth',
      'Oliver Twist, A Christmas Carol',
      'The Picture of Dorian Gray, The Importance of Being Earnest',
    ]
    res.send(books[id - 1])
  })
  //04
  const authors = [
    {
      name: 'Lawrence Nowell',
      nationality: 'UK',
      books: ['Beowulf'],
    },
    {
      name: 'William Shakespeare',
      nationality: 'UK',
      books: ['Hamlet', 'Othello', 'Romeo and Juliet', 'MacBeth'],
    },
    {
      name: 'Charles Dickens',
      nationality: 'US',
      books: ['Oliver Twist', 'A Christmas Carol'],
    },
    {
      name: 'Oscar Wilde',
      nationality: 'UK',
      books: ['The Picture of Dorian Gray', 'The Importance of Being Earnest'],
    },
  ]
  
  app.get('/json/authors/:id', (req, res) => {
    const id = req.params.id
    res.json({
      name: authors[id - 1].name,
      nationality: authors[id - 1].nationality,
    })
  })
  
  app.get('/json/authors/:id/books', (req, res) => {
    const id = req.params.id
    res.json({
      books: authors[id - 1].books,
    })
  })
app.get('*', (req, res) => {
  res.send('404 - Error')
})
