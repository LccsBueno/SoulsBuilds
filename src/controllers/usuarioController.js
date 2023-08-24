var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function login(req, res) {
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    if (email == undefined) {
        res.status(400).send("Seu e-mail não foi encontrado!");
    } else if (password == undefined) {
        res.status(400).send("Sua senha está incorreta!");
    } else {

        usuarioModel.login(email, password)
            .then(

                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }

                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var name = req.body.nameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    // Faça as validações dos valores
    if (name == undefined) {
        res.status(400).send("Este nome não é permitido!");

    } else if (email == undefined) {
        res.status(400).send("Este e-mail não é permitido!");

    } else if (password == undefined) {
        res.status(400).send("Esta senha não é permitida");


    }else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

        usuarioModel.verificacao_name(name)
            .then(
               function (resultado){
                if(resultado.length > 0){
                    res.status(405).send("Já existe um usuário com este nome");
                }
                else {
                    usuarioModel.verificacao_email(email)
                        .then(
                            function (resultado){
                                if(resultado.length > 0){
                                    res.status(405).send("E-mail já está em uso");
                                }
                                else{
                                    usuarioModel.cadastrar(name, email, password)
                                    .then(
                                        function (resultado) {
                                            res.json(resultado);
                                        })
                                    .catch(
                                        function (erro) {
                                            console.log(erro);
                                            console.log(
                                                "\nHouve um erro ao realizar o cadastro! Erro: ",
                                                erro.sqlMessage
                                            );
                                            res.status(500).json(erro.sqlMessage);
                                        }
                                    );
                                }
                            }
                        )

                    
                }
               }
            )

    }
}

module.exports = {
    login,
    cadastrar,
}