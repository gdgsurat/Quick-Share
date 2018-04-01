const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs');
});
app.get('/main', (req, res) => {
    res.render('index.hbs');
});
app.get('/sign_in', (req, res) => {
    res.render('sign_in.hbs');
});

app.listen(port, () => {
    console.log(`lISTENING on port ${port}`);
});