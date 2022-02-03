import express from 'express'
import jungleAxePrice from '/github/hypixel/js/jungle-axe.js'

const app = express();

let jungleAxe = jungleAxePrice;

app.use( express.static( "assets" ) );

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('tools/jungle-axe', { jungleAxe })
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`  Listening  on http://locallhost:${port}`)
});