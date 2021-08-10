setInterval(carregar, 1000)





function carregar(){

let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let seconds = date.getSeconds()


let clock = window.document.getElementsByTagName('h1')[0]
clock.innerHTML = `${hour}:${minute}:${seconds}`


}


let button1 = window.document.getElementById('box1')
button1.addEventListener('touchstart' , clicar)
let img = window.document.getElementById('img')

function clicar(){

document.body.style.background = '#e14c8e'
document.body.querySelector('img').style.visibility = 'hidden'
document.body.querySelector('h1').style.visibility = 'hidden'
document.body.innerText = 'Eu nunca fiz textinho pra mandar de aniversário, mas vou me dedicar em fazer esse, pois é pra você, uma pessoa mais que especial pra mim. não existem dados científicos que comprovem com exatidão há quanto tempo o mundo foi criado. mas eu tenho os dados exatos de quanto tempo o meu mundo foi criado, e hoje tá completando 15 aninhos (uma idosa já, brincadeiras a parte kkkk) o mundo perfeito, onde eu quero estar, que me faz sorrir todos os dias, que me faz acordar cada dia mais disposto só pra falar contigo, quando eu falo com você, eu esqueço de tudo de ruim que existe, esqueço que a Petrobras tá sendo destruída, enfim. continue sendo essa menina gentil, simpática, fofa, de coração bom, a flor mais linda de um jardim. posso não ser o mais perfeito, posso não ser um cara que você sempre sonhou, mas olha, eu sempre vou fazer de tudo pra ver você feliz, pode contar comigo em tudo, eu sempre estarei aqui pra te apoiar, pra te ajudar, independente do que seja, sou capaz de largar tudo pro alto só pra te atender quando precisar, eu te amo mais que tudo e hoje nesse dia muito especial, eu te desejo muita saúde e paz e que não só hoje, mas os  seus próximos dias, sejam os melhores da sua vida e que você alcance tudo que sonha e pra finalizar, feliz aniversáriooo meu amor ❤️❤️❤️❤️❤️❤️  🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳😘😘😘😘😘 pela tarde eu te dou seu açaí'
document.body.style.font = 'normal 12pt roboto'
}

