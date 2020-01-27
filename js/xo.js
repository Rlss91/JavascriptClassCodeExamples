now = 'X'
function f1(e) {
    if (e.target.innerText === '[ ]') {
        e.target.innerText = `[${now}]`
        now = now === 'X' ? 'O' : 'X'
        console.log(Win1(e))
    }
}
