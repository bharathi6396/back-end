const fetch = require('node-fetch')

fetch('http://localhost:8000/rest/v2/all')
  .then(response => response.json())
  .then(data => data.map(country => {
      console.info(country.name)
    }),
  )
  .catch(err => console.error(err))