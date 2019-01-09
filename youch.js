const express = require('express')
const Youch = require('youch')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    whatever()
})

app.use(async (err, req, res, next) => {
    const youch = new Youch(err, req)

    return res.send(await youch.toHTML())
})