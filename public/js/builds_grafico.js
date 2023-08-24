
var statisticas = [];

var myChart_perks;

const grafico_perks = document.getElementById('perks');

myChart_perks = new Chart(grafico_perks, {
    type: 'radar',
    data: {
        labels: ['STR', 'DEX', 'INT', 'FTH', 'LCK'],
        datasets: [{
            label: 'Níveis',
            borderColor: 'rgb(155, 31, 31, 1)',
            backgroundColor: 'rgb(155, 31, 31, 0.8)',
            data: [1,1,1,1,1],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    function atualizar_grafico_perks() {
        
    statisticas = [
        atributo_Strength.value,
        atributo_Dexterity.value,
        atributo_Intelligence.value,
        atributo_Faith.value,
        atributo_Luck.value
    ];
    myChart_perks.data.datasets[0].data = statisticas;
    myChart_perks.update();

    atualizar_grafico_encantamento_perks()
}

var myChart_encantamento;

const grafico_encantamento = document.getElementById('encantamento');

myChart_encantamento = new Chart(grafico_encantamento, {
    type: 'radar',
    data: {
        labels: ['Físico', 'Mágico', 'Fogo', 'Raio', 'Escuridão'],
        datasets: [{
            label: 'Pontos da Build',
            borderColor: '#9B1F1F',
            backgroundColor: 'rgb(155, 31, 31, 0.7)',
            data: [1,1,1,1,1],
            borderWidth: 1
        },{
            label: 'Pontos da arma',
            borderColor: '#5768F2',
            borderWidth: "10",
            backgroundColor: 'rgb(87, 104, 242, 0.5)',
            data: [1,1,1,1,1],
            borderWidth: 1  
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function atualizar_grafico_encantamento_perks() {

    proporcionamento_perks = 100/(
        Number(atributo_Dexterity.value) + 
        Number(atributo_Strength.value) +
        Number(atributo_Intelligence.value) +
        Number(atributo_Faith.value) +
        Number(atributo_Luck.value)
    );


    perks_fisico = (Number(atributo_Dexterity.value) + Number(atributo_Strength.value)) * proporcionamento_perks ;
    perks_magico = (Number(atributo_Intelligence.value)) * proporcionamento_perks;
    perks_fogo = (Number(atributo_Intelligence.value)) * proporcionamento_perks;
    perks_raio = (Number(atributo_Faith.value)) * proporcionamento_perks;
    perks_escuridao = (Number(atributo_Faith.value)/2) + (Number(atributo_Intelligence.value)/2) * proporcionamento_perks;

    statisticas_encantamento_perks = [perks_fisico, perks_magico, perks_fogo, perks_raio, perks_escuridao];

    myChart_encantamento.data.datasets[0].data = statisticas_encantamento_perks;
    myChart_encantamento.update();
}

function atualizar_grafico_encantamento_arma(item_escolhido) {

    console.log(item_escolhido);    

    proporcionamento_arma = (100/(
        Number(item_escolhido.Dark) + 
        Number(item_escolhido.Physical) + 
        Number(item_escolhido.Magic) + 
        Number(item_escolhido.Fire) + 
        Number(item_escolhido.Lightning))
        ) 


    arma_fisico_proporcao = Number(item_escolhido.Physical) * proporcionamento_arma;
    arma_magico_proporcao = Number(item_escolhido.Magic) * proporcionamento_arma;
    arma_fogo_proporcao = Number(item_escolhido.Fire) * proporcionamento_arma;
    arma_raio_proporcao = Number(item_escolhido.Lightning) * proporcionamento_arma;
    arma_escuridao_proporcao = Number(item_escolhido.Dark) * proporcionamento_arma;

    statisticas_encantamento_arma = [
        arma_fisico_proporcao,
        arma_magico_proporcao,
        arma_fogo_proporcao,
        arma_raio_proporcao,
        arma_escuridao_proporcao,
    ]

    console.log(statisticas_encantamento_arma);
    myChart_encantamento.data.datasets[1].data = statisticas_encantamento_arma;
    myChart_encantamento.update();  
}

