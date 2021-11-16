const firstdb = require("../database/firstdatabase");
const seconddb = require("../database/seconddatabase");

class Ocorrencias{

    async findReports(){
		let result = undefined;
		await seconddb.select("*").table("REPORTING.FTO_EVENT").where({sk_event: 6989}).then(data => {
 			result = data;

		}).catch(error => {
			console.log(error);
			result = error;
		});

		// console.log("Teste fora do escopo da consulta SQL");

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