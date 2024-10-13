function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var saudação = document.getElementById('saudação')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora < 2 && hora > 0) {
        img.src = 'foto1.png'
        document.body.style.background = "#833197"
        saudação.innerHTML = 'Boa madrugada meu amor!'
    } else if (hora < 3 && hora > 1) {
        img.src = 'foto2.png'
        document.body.style.background = "#0c101b"
        saudação.innerHTML = 'Boa madrugada! meu amor'
    } else if (hora < 4 && hora > 2) {
        img.src = 'foto3.png'
        document.body.style.background = "#f0c82b"
        saudação.innerHTML = 'Boa madrugada meu amor!'
    } else if (hora < 5 && hora > 3) {
        img.src = 'foto4.png'
        document.body.style.background = "#282a37"
        saudação.innerHTML = 'Boa madrugada meu amor!'
    } else if (hora < 6 && hora > 4) {
        img.src = 'foto5.png'
        document.body.style.background = '#b5a7a7'
        saudação.innerHTML = 'Boa madrugada meu amor!'
    } else if (hora < 7 && hora > 5) {
        img.src = 'foto6.png'
        document.body.style.background = '#5e6b61'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 8 && hora > 6) {
        img.src = 'foto7.png'
        document.body.style.background = '#27572d'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 9 && hora > 7) {
        img.src = 'foto8.png'
        document.body.style.background = '#5a1c29'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 10 && hora > 8) {
        img.src = 'foto9.png'
        document.body.style.background = '#ba6f35'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 11 && hora > 9) {
        img.src = 'foto10.png'
        document.body.style.background = '#a3a4a8'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 12 && hora > 10) {
        img.src = 'foto11.png'
        document.body.style.background = '#998881'
        saudação.innerHTML = 'Bom dia meu amor!'
    } else if (hora < 13 && hora > 11) {
        img.src = 'foto12.png'
        document.body.style.background = '#547388'
        saudação.innerHTML = 'Boa tarde meu amor!'
    } else if (hora < 14 && hora > 12) {
        img.src = 'foto13.png'
        document.body.style.background = '#4a3927'
        saudação.innerHTML = 'Boa tarde meu amor!'
    } else if (hora < 15 && hora > 13) {
        img.src = 'foto14.png'
        document.body.style.background = '#222824'
        saudação.innerHTML = 'Boa tarde meu amor!'
    } else if (hora < 16 && hora > 14) {
        img.src = 'foto15.png'
        document.body.style.background = '#ac5663'
        saudação.innerHTML = 'Boa tarde meu amor!' 
    } else if (hora < 17 && hora > 15) {
        img.src = 'foto16.png'
        document.body.style.background = '#7f8988'
        saudação.innerHTML = 'Boa tarde meu amor!'
    } else if (hora < 18 && hora > 16) {
        img.src = 'foto17.png'
        document.body.style.background = '#323433'
        saudação.innerHTML = 'Boa tarde meu amor!'
    } else if (hora < 19 && hora > 17) {
        img.src = 'foto18.png'
        document.body.style.background = '#db9bbe'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else if (hora < 20 && hora > 18) {
        img.src = 'foto19.png'
        document.body.style.background = '#836b4f'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else if (hora < 21 && hora > 19) {
        img.src = 'foto20.png'
        document.body.style.background = '#20314d'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else if (hora < 22 && hora > 20) {
        img.src = 'foto21.png'
        document.body.style.background = '#3a3635'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else if (hora < 23 && hora > 21) {
        img.src = 'foto22.png'
        document.body.style.background = '#48c9f3'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else if (hora < 24 && hora > 22) {
        img.src = 'foto23.png'
        document.body.style.background = '#40516d'
        saudação.innerHTML = 'Boa noite meu amor!'
    } else {
        img.src = 'foto25.png'
        document.body.style.background = '#3a1526'
        saudação.innerHTML = 'Boa noite meu amor!'        
    }
}