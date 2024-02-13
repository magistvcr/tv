const textEl = document.getElementById('text')
const text = '¡Pídenos un demo gratis!'
let idx = 1
let speed = 300 / 2
let repeticiones = 0

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

        
    if(idx > text.length) {
        idx = 1
        repeticiones++
    }

    if(repeticiones < 4){
        setTimeout(writeText, speed)
    }

}

