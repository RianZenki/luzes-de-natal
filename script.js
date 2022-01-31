const ligar = document.querySelector('button#ligar')
const alterarVel = document.querySelector('button#alterarVel')

ligar.addEventListener('click', () => {
    const lampadas = document.querySelectorAll('div.circulo')
    lampadas.forEach((lampada) => {
        const estado = lampada.style.animationPlayState || 'running';

        lampada.style.animationPlayState = estado === 'running' ? 'paused' : 'running'
    })
})

alterarVel.addEventListener('click', () => {
    const velocidade = document.querySelector('input#velocidade')
    const lampadas = document.querySelectorAll('div.circulo')

    lampadas.forEach((lampada, index) => {
        lampada.style.animationDuration = velocidade.value + 's'

        lampada.style.animationDelay = (index % 2) === 0 ? 0.5 + 's' : ((velocidade.value / 2) + 0.5) + 's';
    
    })



})