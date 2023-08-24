var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

// BUILD

router.get("/buscar_todos", function (req, res) {
    buildController.build_todos(req, res);
});

router.post("/inserir", function (req, res) {
    buildController.build_inserir(req, res);
})

// ITEM

router.get("/item_todos", (req, res) => {
    buildController.item_todos(req, res);
});

router.get("/item_por_encantamento/:encantamento", function (req, res) {
    buildController.item_por_encantamento(req, res);
});

router.get("/item_por_atributo/:atributo", function (req, res) {
    buildController.item_por_atributo(req, res);
});

router.get("/item_por_tipo/:tipo", function (req, res) {
    buildController.item_por_tipo(req, res);
});

module.exports = router;