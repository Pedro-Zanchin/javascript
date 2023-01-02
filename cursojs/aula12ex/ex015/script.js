function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Erro')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'imagens/criancaM.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 14) {
                img.setAttribute('src', 'imagens/criancaF.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adultoF.png')
            } else {
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}