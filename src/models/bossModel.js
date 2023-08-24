var database = require("../database/config");

function boss_pesquisar() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function boss_pesquisar()");
    var instrucao = `
        SELECT * FROM bosses join bosses_img
            on fk_img = id_img;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function boss_fraquezas() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function boss_pesquisar()");
    var instrucao = `

        select 
        boss_status.fk_boss, 
        boss_status.effect_status, 
        all_status.status 
            from boss_status join all_status 
                on fk_status = id_status;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// select 
// bosses.name,
// boss_status.effect_status,
// all_status.status
//     from bosses join boss_status
//         on id_boss = fk_boss
//     join all_status
//         on id_status = fk_status;

module.exports = {
    boss_pesquisar,
    boss_fraquezas
}
