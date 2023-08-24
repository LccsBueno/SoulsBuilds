var buildModel = require("../models/buildModel");

// BUILD

function build_todos(req, res) {

    console.log('Todas as builds estão sendo buscadas');

    buildModel.build_todos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as builds.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function build_inserir(req, res) {
    

    var name = req.body.nomeServer;
    var strength = req.body.strengthServer;
    var dexterity = req.body.dexterityServer;
    var intelligence = req.body.intelligenceServer;
    var faith = req.body.faithServer;
    var luck = req.body.luckServer;
    var id_item = req.body.id_itemServer;

    console.log(`As builds estão sendo inseridas`);

    buildModel.build_inserir(name , strength, dexterity, intelligence, faith, luck, id_item).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao inserir as builds.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function item_todos(req, res) {
    buildModel.item_todos()
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error.sqlMessage);
      });
}

function item_por_encantamento(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o item.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function item_por_atributo(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o item.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function item_por_tipo(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o item.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    build_todos,
    build_inserir,
    item_todos,
    item_por_encantamento,
    item_por_atributo,
    item_por_tipo,
}