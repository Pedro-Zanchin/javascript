/*
    Ao todo, temos x numeros cadastrados
    O maior valor informado foi x
    O menor valor informado foi x
    Somando todos valores, temos x
    A média dos valores digitados é x
*/
// Não pode adicionar números iguais nem finalizar sem nenhum número
let txtn = document.getElementById('txtn')
let caixa = document.getElementById('caixa')
let res = document.getElementById('res')
let vetor = []

function isNum(n) {
    if(n >=1 && n <=100){
        return true
    } else {
        return false
    }
}

function inCaixa(n, v) {
    if(v.indexOf(n) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    let num = Number(txtn.value)

    res.innerHTML = ''
    if(isNum(num) && !inCaixa(num, vetor)) {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        caixa.appendChild(item)
        vetor.push(num)
    } else {
        window.alert('Valor já encontrado na lista ou inválido')
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {
    if(vetor.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        let media = 0

        for(let pos in vetor){
            soma += vetor[pos]
        }
        res.innerHTML = ''
        vetor.sort()
        res.innerHTML = `<p>Ao todo, temos ${vetor.length} numeros cadastrados</p>
        <p>O maior valor informado foi ${vetor[vetor.length-1]}<p>
        <p>O menor valor informado foi ${vetor[0]}</p>
        <p>Somando todos valores, temos ${soma}</p>
        <p>A média dos valores digitados é ${soma/vetor.length}</p>`
    }
}