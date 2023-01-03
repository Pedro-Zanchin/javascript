function gerar() {
    var tnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if(tnum.value.length == 0){
        alert('ERRO: Digite um número')
    } else {
        var num = Number(tnum.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}