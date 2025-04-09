const minusculas= "abcdefghijklmnopqrstuvwxyz"
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUV" 
const numeros = "1234567890"
const caracteresEspeciais = "!@#$%¨&*()<>{}[]"


function gerarSenha() {
    const comprimento = parseInt(document.getElementById ("comprimento").value)
    const opcoes = {
        minusculas: document.getElementById ("minusculas").checked,
        maiusculas: document.getElementById ("maiusculas").checked,
        numeros: document.getElementById ("numeros").checked,
        caracteresEspeciais: document.getElementById ("especiais").checked
}

let caracteres = ''
if (opcoes.minusculas) caracteres += minusculas
if (opcoes.maiusculas) caracteres += maiusculas
if (opcoes.numeros) caracteres += numeros
if (opcoes.caracteresEspeciais) caracteres += caracteresEspeciais


if (!caracteres) {
    alert("Selecione pelo menos uma opção")
}

let senha = ''
for(let contador = 0; contador < comprimento; contador++){
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[indiceAleatorio]
}
document.getElementById("senha").value = senha
}
function copiarSenha(){
    const entradaSenha = document.getElementById("senha")
    entradaSenha.Selected()
    document.execCommand('copy')

    const botaoCopiar = document.querySelector('.botao-copiar')
    const textoOriginal = botaoCopiar.textContent
    botaoCopiar.textContent = "copiado"
    setTimeout(() => {
        botaoCopiar.textContent = textoOriginal
    }, 2000)
}


gerarSenha()