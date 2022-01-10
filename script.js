var num = document.getElementById("entrada")
dados = []
var lista = document.getElementById("dados")
var resultado = document.getElementById("resultado")

function test1(n) {  // Avalia se o número está dentro do intervalo permitido
    if(n >= 1 & n <= 100) {
        return true
    } else {
        alert("Número fora do intervalo permitido!\nDigite um número de 1 a 100.")
    }
}

function test2(n, valores) {  // Avalia se o número já foi adicionado anteriormente
    if(valores.indexOf(n) == -1) {
        return true
    } else {
        alert("Valor já adicionado!\nEscolha outro valor.")
    }
}

function adicionar() {
    if(test1(Number(num.value)) && test2(Number(num.value), dados)) {
        dados.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }
    num.value = ""
}

function finalizar() {
    lista.innerHTML = ""
    if(dados == "") {
        alert("Adicione dados primeiro!")
    } else {
        let total = dados.length
        let maior = dados[0]
        let menor = dados [0]
        let soma = 0
        let media = 0
        for(let i in dados) {
            soma += dados[i]
            media = soma / total
            if(dados[i] > maior) {
                maior = dados[i]
            }
            if(dados[i] < menor) {
                menor = dados[i]
            }
        }
        resultado.innerHTML = ""
        resultado.innerHTML = `<p>Foram analisados ${total} números.</p>`
        resultado.innerHTML += `<p>Os números analisados foram ${dados.join(", ")}.</p>`
        resultado.innerHTML += `<p>O menor número analisado foi ${menor} e o maior deles foi ${maior}.</p>`
        resultado.innerHTML += `<p>A soma dos números analisados foi ${soma} e sua média foi ${media.toFixed(2).replace(".", ",")}.`
        alert(dados)
        dados = ""
        dados = []
    }
}
