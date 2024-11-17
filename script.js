function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/baby-boy.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/young-boy.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adult-man.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/old-man.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/baby-girl.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/young-girl.jpg')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imagens/adult-woman.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/old-woman.jpg')
            }
        }
        var texto = document.createElement('p')
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(texto)
        res.appendChild(img)
    }
}