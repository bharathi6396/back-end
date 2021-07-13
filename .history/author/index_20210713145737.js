const express = require('express');
const app = express();
app.get('/bonjour', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send('bonjour')
});
app.get('/bonjour/:name', (req, res) => {
    res.send(`Bonjour ${req.params.name} !`);
});
app.get('/bonjour/:name/age/:age', (req, res) => {
    res.send(`Bonjour ${req.params.name} ! Tu as ${req.params.age} ans.`);
});
//result en json
app.get('/hello/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}!`,
    });
});
app.get('/country/:countryName/capital', (req, res) => {
    let country = req.params.countryName;
    let capitalCity = "";
    let continent = "";

    switch (country) {
        case "france":
            capitalCity = "Paris";
            continent = "Europe"
            break;
        
        case "spain":
            capitalCity = "Madrid";
            continent = "Europe"
            break;

        case "argentina":
            capitalCity = "Buenos Aires";
            continent = "America"
            break;

        default:
            capitalCity = "not found"
						continent = "none"
            break;
    }

    res.json({
        capital: capitalCity,
        continent: continent
    });
});
app.get('*', (req, res) => {
    res.send('All routes');
});
app.get('/', (req, res) => {
    res.send('Beautiful Homepage');
});
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});