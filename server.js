const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'))

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales', (err) => {});
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sergio ORdoñez e Isabella Ordoñez'
    });

})

app.get('/about', (req, res) => {
    res.render('about');

})

app.get('/data', (req, res) => {
    let salida = {
        nombre: 'Sergio',
        edad: 39,
        url: req.url
    }
    res.send(salida);

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
