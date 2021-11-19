const firstdb = require("../database/dbconfig");

class Ocorrencias{

	async salvarProduto($dada){
		
		// let result = undefined;

		firstdb('produtos').insert({
				descricao: $dada.descricao, 
				preco: $dada.preco,
				tipo_embalagem: $dada.tipo_embalagem,
				quantidade_embalagem: $dada.quantidade_embalagem,
				peso: $dada.peso
		
		}).then(data => {
            
            console.log("Produto Cadastrado com sucesso!");
            console.log(data);
            console.log("*******************************");
			return data;
			
		}).catch(error => {
			console.log(error);
			return error;
		});

	}

    async selecionarProduto(idProduto){

		let result = undefined;

		await firstdb.select("*").from('produtos').where('codigo', idProduto).then(data =>{

			result  = data;
		}).catch(error => {

			result = error;
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


		return result;
	
	}	


	async atualizarProduto($dataParam){
		
		let result = undefined;

		firstdb('produtos').where({codigo: $dataParam.id}).update({
				descricao: $dataParam.descricao, 
				preco: $dataParam.preco,
				tipo_embalagem: $dataParam.tipo_embalagem,
				quantidade_embalagem: $dataParam.quantidade_embalagem,
				peso: $dataParam.peso
		
		}).then(data => {

			result = data;
		});

		return result;
	}

	async deletarProduto($id){
		// console.log("Dados retornados : " + $id);
		// return $id;

		let result = undefined;

		firstdb('produtos').where({codigo: $id}).del().then(data => {
			result = data;

		}).catch(error => {
			console.log(error);
			result  = error;
		});

		return result;

	}

}

module.exports = new Ocorrencias();