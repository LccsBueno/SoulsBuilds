var database = require("../database/config");

// BUILD

function build_todos() {

    var instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM build;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function build_inserir(name , strength, dexterity, intelligence, faith, luck, id_item_escolhido) {

    var instrucaoSql = `    
        INSERT INTO Build (name , strength, dexterity, intelligence, faith, luck, fk_item) VALUES
            ('${name}', ${strength}, ${dexterity}, ${intelligence}, ${faith}, ${luck}, ${id_item_escolhido});
             `; 
        return database.executar(instrucaoSql)
}

// ITENS

function item_todos() {

    var instrucaoSql = `
        SELECT * FROM itens;`

    return database.executar(instrucaoSql);
}

function item_por_encantamento(encantamento) {
    
    var instrucaoSql = `
        select * from itens where enchatment = '${encantamento}';`

    return database.executar(instrucaoSql);
}

function item_por_tipo(tipo) {

    var instrucaoSql = `
        select * from itens where type  = '${tipo}';`

    return database.executar(instrucaoSql);
}

function item_por_atributo(atributo_escolhido, atributo_sigla) {

    var instrucaoSql = `
        select * from itens where ${atributo_sigla} = '${atributo_escolhido}';`

    return database.executar(instrucaoSql);
}



module.exports = {
    build_todos,
    build_inserir,
    item_todos,
    item_por_encantamento,
    item_por_tipo,
    item_por_atributo,
}
