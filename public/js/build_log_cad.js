var tela_login = document.getElementById("login");
var tela_cadastro = document.getElementById("cadastro");
var modal = document.getElementById("modal");
var modal_background = document.getElementById("modal_background")

function modal_to_login() {
    tela_login.classList.remove('to_cadastro')
    tela_login.classList.add('to_login')

    // tela_cadastro.classList.add("login_cadastro_display_none")
    // tela_login.classList.remove("login_cadastro_display_none")   

    modal.classList.remove('height_to_cadastro')
    modal.classList.add('height_to_login')

    tela_login.style.marginLeft = "0px"
    modal.style.height = "510px";
}

function modal_to_cadastro() {
    tela_login.classList.remove('to_login')
    tela_login.classList.add('to_cadastro')

    // tela_login.classList.add('login_cadastro_display_none')
    // tela_cadastro.classList.remove('login_cadastro_display_none')

    modal.classList.remove('height_to_login')
    modal.classList.add('height_to_cadastro')
    
    tela_login.style.marginLeft = "-397px";
    modal.style.height = "610px";

}

function login() {

    var emailVar = input_login_email.value;
    var passwordVar = input_login_password.value;

    if (emailVar == "" || passwordVar == "") {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            iconColor: '#9B1F1F',
            title: 'Preencha todos os campos',
            confirmButtonColor: '#9B1F1F',
            background: '#252525', 
          })
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", passwordVar);

    fetch("/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            passwordServer: passwordVar
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            Swal.fire({
                position: 'top',
                icon: 'success',
                iconColor: '#FFBC42',
                title: 'Login realizado !!',
                showConfirmButton: false,
                timer: 1300,
                background: '#252525', 
              })

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                setTimeout(function () {
                    modal_background.style.display = "none";;
                }, 1300); // apenas para exibir o loading

            });

        } else {
            Swal.fire({
                position: 'top',
                icon: 'error',
                iconColor: '#9B1F1F',
                title: 'Houve um erro ao realizar o login!',
                text: `Erro: ${resposta}`,
                confirmButtonColor: '#FFBC42',
                background: '#252525', 
              })
            limpar_credenciais()
            resposta.text().then(texto => {
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nameVar = input_cadastro_name.value
    var emailVar = input_cadastro_email.value;
    var passwordVar = input_cadastro_password.value;

    if (nameVar == "" || emailVar == "" || passwordVar == "") {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            iconColor: '#9B1F1F',
            title: 'Preencha todos os campos',
            confirmButtonColor: '#9B1F1F',
            background: '#252525', 
          })
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nameServer: nameVar,
            emailServer: emailVar,
            passwordServer: passwordVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                iconColor: '#FFBC42',
                title: 'Cadastro realizado !!',
                showConfirmButton: false,
                timer: 1300,
                background: '#252525', 
              })
              
            modal_background.style.display = "none";

            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;

        } else {
            Swal.fire({
                position: 'top',
                icon: 'error',
                iconColor: '#9B1F1F',
                title: 'Houve um erro ao realizar o cadastro!',
                text: `Erro: ${resposta}`,
                confirmButtonColor: '#FFBC42',
                background: '#252525', 
              })
        }
    }).catch(function (resposta) {
 

    });

    return false;
}

function limpar_credenciais(){
    input_login_email.value = "";
    input_login_password.value = "";


    input_cadastro_name.value = "";
    input_cadastro_email.value = "";
    input_cadastro_password.value = "";
}