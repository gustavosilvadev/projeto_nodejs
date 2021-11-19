var cookieParser 	    = require('cookie-parser')
var csrf 			    = require('csurf');
let express 	  	    = require('express');
let bodyParser 		    = require('body-parser')
let app 			    = express();
let router 			    = express.Router();
let HomeController 	    = require("../controllers/HomeController");
const { response }      = require('express');


var csrfProtection = csrf({ cookie: true })
var parseForm 	   = bodyParser.urlencoded({ extended: false })

app.use(cookieParser())
app.use(csrf())

router.get("/",HomeController.index);
router.get("/listaprodutos",HomeController.buscarProdutos);
router.get("/produto/:id", HomeController.buscarProduto);
router.post("/salvar", HomeController.cadastrarProduto);
router.post("/autalizar", HomeController.alterarProduto);
router.delete("/deleta/:id", HomeController.removerProduto);
/*
router.delete("/deleta/:id", (req, res) => {
    var response = { message : "Some message!", state   : true };
    return res.json(response);
});
*/

module.exports = router;