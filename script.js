

let key= "13fb841ecbee2aae6b80da407d746e0e"




function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())
    
    colocarNaTela(dados)

    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function clickNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}




























