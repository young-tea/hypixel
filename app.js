import express from 'express';
import nunjucks from 'nunjucks';


import treecapitatorPrice from './js/treecapitator.js';
import BINdata from './js/ah-data.js'

let treecap = treecapitatorPrice;
let treecapBIN = BINdata.TREECAPITATOR_AXE


const app = express();

app.use(express.static('public'));

let value = 545

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/items/tools/treecapitator', function(req, res) {
    res.render('items/tools/treecapitator.html', { treecap, treecapBIN });
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening to ${port}`)
});