function funcionando(){
    const msg = window.document.getElementById('msg')  //Pegar a mensagem que vai ser transmitida
    let img = window.document.getElementById('imagem')
    const agora = new Date()
    const hora = agora.getHours()
    const min = agora.getMinutes()
    msg.innerHTML = `São ${hora}:${min} horas `
    if(hora >0 && hora <=12){
        img.src = 'foto_manha.png'

    }
    else if(hora >12 && hora < 18){
        img.src = 'foto_tarde.png'
        document.body.style.backgroundColor = '	#F4A460'

    }else{
        img.src = 'foto_noite.png'
        document.body.style.backgroundColor = '#C71585'
    }

}

