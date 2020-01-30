const path = require('path')
const express = require('express')
const app = express()
var cors = require('cors')
const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
    console.log(req.query)
    res.json('where is the button???')
})

app.get('/arr', (req, res) => {
    let arr = [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7]
    ]
    let index = parseInt(req.query.index)
    if (index >= 0 && index < arr.length)
        res.json(arr[index])
    else
        res.json({ error: 'the array starts with 0 and ands in 2' })
})

app.get('/json', (req, res) => {
    let arr = [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7]
    ]
    res.json(arr)
})

app.listen(PORT, () => {
    console.log(`be haver the deamon on port ${PORT}`)
})