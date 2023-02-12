
function calcular(){
    var veloc = document.getElementById('vel')
    var res = document.getElementById('res')
    var vel = Number(veloc.value)
    res.innerHTML = `<p>Sua velocidade é de <strong> ${vel} km/h</strong></p>`
    if(vel > 80){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
}