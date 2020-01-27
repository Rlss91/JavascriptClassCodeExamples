"use strict"
let a = 5

window.addEventListener('load', () => {
    // let txt = document.getElementById('txt')
    txt.addEventListener('focus', handleFocus)
    txt2.addEventListener('focus', handleFocus)
    txt.addEventListener('blur', handleFocus)
    txt2.addEventListener('blur', handleFocus)
    // txt.addEventListener('blur', f2)
    setInterval(() => {
        handleFocus({ target: document.getElementById('txt') })
    }, 100)
})

function handleFocus(e) {
    // console.log(e.target)
    e.target.classList.toggle('focused')
}

function f1(e) {
    let div = document.getElementById('div')
    div.remove()
}

let o = { name: 'a' }, o2 = { name: 'a' }