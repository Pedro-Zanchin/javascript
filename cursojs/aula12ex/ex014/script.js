
function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/Manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'imagens/Tarde.png'
        document.body.style.backgroundColor = '#4880ad'
    } else {
        imagem.src = 'imagens/Noite.png'
        document.body.style.backgroundColor = '#172c3d'
    }
}
