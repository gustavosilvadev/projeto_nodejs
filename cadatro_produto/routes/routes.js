let express = require('express');
let app = express();
let router = express.Router();

let HomeController = require("../controllers/HomeController");

router.get("/", HomeController.index);
router.get("/listaocorrencia", HomeController.listEvent);
router.get("/tabelascad", HomeController.listTableCad);
router.get("/tabelasreporting", HomeController.listTableRep);
router.get("/colunasreporting", HomeController.listColumnRep);
router.get("/telasrelacionadas", HomeController.showRelatedTables);

module.exports = router;