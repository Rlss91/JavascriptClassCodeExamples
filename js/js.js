window.addEventListener('load', () => {
    let div = document.getElementById('div')
    let a = 5, b = 6, str = 'some text'
    // div.innerHTML = '<p class="p">My a number is ' + a + ' my b number is ' + b + ' and i have ' + str + '</p>'
    // div.innerHTML = `<p class="p">My a number is ${a} my b number is ${b} and i have ${str}</p>`
    div.innerHTML = `<form action="">
                        <input type="text" name="username" id="username" placeholder="username">
                        <input type="text" name="password" id="password" placeholder="password">
                    </form>`
    let rowname = "row" + getRndInteger(1, 3)
    console.log(rowname)
    let row = document.getElementById(rowname)
    row.style.backgroundColor = `rgb(${getRndInteger(0, 255)},${getRndInteger(0, 255)},${getRndInteger(0, 255)})`
    createList()
    change1()
    // console.log((typeof null))
    // document.getElementById('txt').setAttribute('type', 'text')
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createList() {
    let str = ""
    let arr = [
        1, 2, 3, 4, 5, 6
    ]
    let list = document.getElementById('list')
    for (let item of arr) {
        str += `<li>`
        switch (item) {
            case 3:
                str += `4`
                break;
            case 4:
                str += `7`
                break;
            default:
                str += item
                break;
        }
        str += `</li>`
        list.innerHTML += str
    }
}
function change1() {
    let form = document.getElementById('form')
    // form = document.querySelector('#form')
    //for(let i=0;i<form.children.length;i++)
    for (let item of form.children) {
        if (item.hasAttribute('type')) {
            switch (item.getAttribute('type')) {
                case 'text':
                    item.setAttribute('type', 'button')
                    break;
                case 'button':
                    item.setAttribute('type', 'text')
                    // item.hidden = true
                    break;
            }
        }
    }
}
function f1() {
    console.log('f1')
}
function f2() {
    console.log('f2')
}
function f3() {
    console.log('f3')
}