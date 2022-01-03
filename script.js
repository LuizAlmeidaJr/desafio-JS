let num = document.getElementById("entrada")
let lista = document.querySelector("select#lista")
let res = document.getElementById("resultado")
let dados = []

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function outList(n, l) {
  if(l.indexOf(Number(n)) == -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if(isNumber(num.value) && outList(num.value, dados)) {
    dados.push(Number(num.value))
    let item = document.createElement("option")
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ""
  } else {
    alert("Valor inválido ou já adicionado à lista!")
  }
  num.value = ""
  num.focus()
}

function finalizar() {
  if(dados.length == 0) {
    alert("Adicione valores antes de finalizar!")
  } else {
    let tot = dados.length
    let maior = dados[0]
    let menor = dados[0]
    let soma = 0
    let media = 0
    for(let pos in dados) {
      soma += dados[pos]
      media += soma / tot
      if(dados[pos] > maior)
        maior = dados[pos]
      if(dados[pos] < menor)
        menor = dados[pos]
    }
    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(2).replace(".", ",")}.</p>`
  }
}
