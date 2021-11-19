const Produtos = require("../models/Produtos")

class HomeController{

	async index(req, res){

        let dataResult = await Produtos.selecionarProdutos();
    
        if(dataResult != undefined){
            res.statusCode = 200;
            res.render("Home", {dadosProdutos: dataResult});
    
        }else{
    
            res.status(404).json({status:404, message:"Dados não encontrado"});;
        }

	}

    async cadastrarProduto(req, res){

        let dataResult = await Produtos.salvarProduto(req.body);
        

        if(dataResult != undefined){

            res.statusCode = 200;
            res.render("Home");
    
        }else{
    
            res.status(406).json({status:406, message:"Dados não cadastrados"});;
        }


        res.render("Home");

    }    

    async buscarProdutos(req, res){

        let dataResult = await Produtos.selecionarProdutos();
    
        if(dataResult != undefined){
            res.statusCode = 200;
            res.send(dataResult);
    
        }else{
    
            res.status(404).json({status:404, message:"Dados não encontrado"});;
        }
    }

    async buscarProduto(req, res){

        let idProduto = req.params.id;


        let dataResult = await Produtos.selecionarProduto(idProduto);
    

        if(dataResult != undefined){
            res.statusCode = 200;
            res.send(dataResult);
    
        }else{
    
            res.status(404).json({status:404, message:"Dados não encontrado"});;
        }
    }
    
    async alterarProduto(req, res){
        let dataResult = await Produtos.atualizarProduto(req.body);


        if(dataResult != undefined){

            res.statusCode = 200;
            res.render("Home");
    
        }else{
    
            res.status(406).json({status:406, message:"Dados não atualizados"});;
        }

    }

    async removerProduto(req, res){
        let idProduto = req.params.id;
        let dataResult = await Produtos.deletarProduto(idProduto);

        if(dataResult != undefined){
            
            res.statusCode = 200;
            res.render("Home");
    
        }else{
    
            res.status(406).json({status:406, message:"Dados não deletados"});;
        }


        // res.redirect("/");
        console.log("Dados de retorno: " + dataResult);
        res.send(dataResult);

    }
}

module.exports = new HomeController();