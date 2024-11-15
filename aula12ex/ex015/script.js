function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade <= 28) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade <= 28) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

   }
}