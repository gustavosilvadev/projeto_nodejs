const Ocorrencias = require("../models/Ocorrencias")

class HomeController{

	async index(req, res){
		// res.send("<body style='display: flex; justify-content: center;'><div style='text-align: center'><h1>-- SPORTAL --</h1></div></body>")
		// res.render("Home", { csrfToken: req.csrfToken() });
		res.render("Home");

	}

	async listEvent(req, res){

		let dataResult = await Ocorrencias.findReports();

		if(dataResult != undefined){
			res.statusCode = 200;
			res.send(dataResult);

		}else{

			res.status(404).json({status:404, message:"Dados não encontrado"});;
		}
	}

	async listTableCad(req, res){
		let dataResult =  await Ocorrencias.findCadTables();

		if(dataResult !== undefined || dataResult.length > 0){
			res.statusCode = 200;
			res.send(dataResult);

		}else{

			res.status(404).json({status:404, message:"Dados não encontrado"});;
		}
	}

	async listTableRep(req, res){
		let dataResult = await Ocorrencias.findReportingTables();

		if(dataResult !== undefined || dataResult.length > 0){
			res.statusCode = 200;
			res.send(dataResult);
		
		}else{
		
			res.status(404).json({status:404, message:"Dados não encontrado"});;
		}
	}

	async listColumnRep(req, res){
		let table = req.body.table;

		if(table){

			let dataResult = await Ocorrencias.findReportingColumnsTable(table);
			
			if(dataResult !== undefined || dataResult.length > 0){
				res.statusCode = 200;
				res.send(dataResult);
			
			}else{

				res.status(404).json({status:404, message:"Dados não encontrado"});;				
			}
		}else{

			res.status(400).json({status:400, message:"Nome da tabela inválida"});;			
		}							   
	}
	
	async showRelatedTables(req, res){
		let tables_rel  = req.body.tables_rel;

		if(tables_rel){
			let dataResult = await Ocorrencias.getDataRelated(tables_rel);
			if(dataResult != undefined){
				res.status = 200;
				res.json(dataResult);

			}else{

				// res.status = 404;
				// res.sendStatus(404);
				res.status(404).json({status:404, message:"Dados não encontrado"});;

			}
			
		}else{
			res.status = 400;
			res.json({status: 400, message: "Dados inválido"});
		}

	}

}

module.exports = new HomeController();