function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var today = document.getElementById('today');

    var date = new Date();
    var hora =  20//date.getHours()
    var minutos = date.getMinutes()
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var dataFormatada = ((date.getDate() +  " - " + meses[(date.getMonth())] +  " - " + date.getFullYear())); 
    msg.innerHTML = `Agora são ${hora}:${minutos}hs`
    today.innerHTML = dataFormatada;
    
    if(hora >= 0 && hora < 12) {
       img.src = './img/manha.png'
       document.body.style.background = `#e2cd9f`
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = `#18ade7`
    } else {
        img.src = './img/noite.png'
        document.body.style.background = `#515154`
    }
}


