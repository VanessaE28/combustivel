const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', ()=>{
    dist = Number(distancia.value)
    cons = Number(consumo.value)
    pre = Number(preco.value)
    valor = (dist / cons) * pre

    resultado.textContent = `O valor para a viagem será R$ ${valor.toFixed(2)}`

})