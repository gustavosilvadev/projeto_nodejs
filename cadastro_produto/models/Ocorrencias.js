/*
const firstdb = require("../database/firstdatabase");
const seconddb = require("../database/seconddatabase");
*/
const firstdb = require("../database/databaseprimeiro");

class Ocorrencias{




	async salvarProduto($dada){
		
		let result = undefined;

		firstdb('produtos').insert({
				descricao: $dada.descricao, 
				preco: $dada.preco,
				tipo_embalagem: $dada.tipo_embalagem,
				quantidade_embalagem: $dada.quantidade_embalagem,
				peso: $dada.peso
		
		}).then(data => {
			result = data;

			console.log("Produto Cadastrado com sucesso!");
			console.log("\n *********");
			console.log(result);
			console.log("\n *********");

		});


		return result;
	}

    async selecionarProdutos(){

		let result = undefined;
		await firstdb.select("*").table("db_mtrix.produtos").then(data => {
 			result = data;

		}).catch(error => {
			console.log(error);
			result = error;
		});


		console.log("Teste fora do escopo da consulta SQL");
		return result;
	
	}	


	async atualizarProduto($dada){
		
		let result = undefined;

		firstdb('produtos').where({id: $dada.id}).update({
				descricao: $dada.descricao, 
				preco: $dada.preco,
				tipo_embalagem: $dada.tipo_embalagem,
				quantidade_embalagem: $dada.quantidade_embalagem,
				peso: $dada.peso
		
		}).then(data => {
			result = data;

			console.log("Produto atualizado com sucesso!");
			console.log("\n *********");
			console.log(result);
			console.log("\n *********");

		});


		return result;
	}



	async deletarProduto($id){
		
		let result = undefined;

		firstdb('produtos').where({id: $id}).del().then(data => {
			result = data;

			console.log("Produto deletado com sucesso!");
			console.log("\n *********");
			console.log(result);
			console.log("\n *********");
			
			success(200);

		}).catch(fail);


		return result;
	}	


	async findCadTables(){

		let result = new Array();
		await firstdb.raw("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'").then(data => {

			data.forEach((value) => {
				result.push(value.TABLE_NAME);
			});
		}).catch(error => {
			console.log(error);
			result = error;
		});

		return result;
	}

	async findReportingTables(){
		
		let result = new Array();

		await seconddb.raw("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE= 'BASE TABLE'").then(data => {

			data.forEach((value) => {
				result.push(value.TABLE_NAME);
			});

		}).catch(error => {
			console.log(error);
			result  = error;
		});

		return result;
	}

	async findReportingColumnsTable(table){
		let result  = new Array();
		await seconddb.raw(`SELECT column_name FROM information_schema.columns WHERE table_name = '${table}'`).then(data => {
			
			data.forEach((value) => {
				result.push(value.column_name);
			});
			
		}).catch(error => {
			console.log(error);
			result = error;
		});

		return result;
	}

	async getDataRelated(tables){

		tables.forEach((values) => {
			console.log(`Tabela: ${values.table} - SK_COLUMN: ${values.sk_column} `);
		});

		return undefined;

		

/*
Exemplo de modelo de entrada dos dados: 
[
	{
		id: 1,
		naname_table: "fto_event",
		column001: "column1",
		column002: "column2",
		column003: "column3",
	},

	{
		id: 2,
		naname_table: "dim_event",
		column001: "num1",
		column002: "description",
	},

	{
		id: 3,
		naname_table: "dim_date",
		column001: "DateTIME",
		column002: "description",
	},
]

select * from 'FTO_EVENT' 'FE'
INNER JOIN 'DIM_EVENT' 'DE' ON 'DE'.'SK_EVENT' = 'FE'.'SK_EVENT'
INNER JOIN 'DIM_DATE' 'DD' ON 'DD'.'SK_DATE' = 'FE'.'SK_DATE'

*/


		// let result = undefined;
		// await seconddb.raw("SELECT top 10 * FROM REPORTING.DIM_EVENT de INNER JOIN REPORTING.FTO_EVENT fe ON de.SK_EVENT = fe.SK_EVENT").then(data => {
		// 	result = data;
		// }).catch(error => {
		// 	console.log(error);
		// 	result = error;
		// })

		// return result;


	}
}

module.exports = new Ocorrencias();