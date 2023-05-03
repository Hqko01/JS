const hr = document.querySelector('.clock .slide .hr')
const min = document.querySelector('.clock .slide .min')
const sec = document.querySelector('.clock .slide .sec')

function clock() {
    const now = new Date()
    hr.style.transform = `rotate(${now.getHours() * 30}deg)`
    min.style.transform = `rotate(${now.getMinutes() * 6}deg)`
    sec.style.transform = `rotate(${now.getSeconds() * 6}deg)`
}

setInterval(clock, 1000)