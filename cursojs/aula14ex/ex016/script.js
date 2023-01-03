function contar() {
    var nIni = Number(document.getElementById('nInicio').value)
    var nFim = Number(document.getElementById('nFim').value)
    var nPas = Number(document.getElementById('nPasso').value)
    var res = document.getElementById('res')
    
    if(!nIni || !nFim) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if(nPas <= 0){
        window.alert('Passo inválido, considerando PASSO 1')
        nPas = 1
        }
        res.innerHTML = 'Contando: <br>'
        if(nIni > nFim){
            while(nIni >= nFim){
                res.innerHTML += String(nIni) + ' > '
                nIni -= nPas
            }
        } else {
            while(nIni <= nFim){
                res.innerHTML += String(nIni) + ' > '
                nIni += nPas
            }
        }
        res.innerHTML += 'FIM'
    }
}