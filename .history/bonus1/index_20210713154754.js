const express = require('express')
const app = express()
const port = 8000
app.listen(port, () => {
  console.info('Server started on port : ' + port)
})

const countries = [
  /* les données copiées/collées de https://restcountries.eu/rest/v2/all */
]

app.get('/rest/v2/all', (req, res) => {
  res.json(countries)
})

app.get('*', (req, res) => {
  res.send('404 - Error')
})