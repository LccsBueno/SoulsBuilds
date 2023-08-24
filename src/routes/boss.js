var express = require("express");
var router = express.Router();

var bossController = require("../controllers/bossController");


router.get("/pesquisar", function (req, res) {
    bossController.boss_pesquisar(req, res);
});

router.get("/fraquezas", function (req, res) {
    bossController.boss_fraquezas(req, res);
});



module.exports = router;