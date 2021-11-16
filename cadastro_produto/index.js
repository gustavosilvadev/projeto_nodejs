let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let router = require('./routes/routes');

let ejs = require('ejs');

app.set("view engine","ejs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/',router);

app.listen(3000, () => {
	console.log("App executando...");
});


